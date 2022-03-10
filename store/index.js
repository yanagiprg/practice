/* eslint-disable no-empty-pattern */
import _ from 'lodash'
import firebase from '@/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export const state = () => ({
  posts: [],
})

export const getters = {
  getPostList(state) {
    return state.posts
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = _.cloneDeep(posts)
  },
}

export const actions = {
  async getPosts({ commit }) {
    const postList = []
    const snapShot = await db
      .collection('posts')
      .orderBy('updatedAt', 'desc')
      .get()
    snapShot.forEach((doc) => {
      postList.push(doc.data())
    })
    commit('setPosts', postList)
  },
  async addPost({}, payload) {
    const res = await db.collection('posts').add({})
    await db.collection('posts').doc(res.id).set({
      id: res.id,
      title: payload.title,
      content: payload.content,
      createdAt: timestamp,
      updatedAt: timestamp,
    })
  },
  async deletePost({}, id) {
    await db.collection('posts').doc(id).delete()
  },
  async editPost({}, id) {
    const snapShot = await db.collection('posts').doc(id).get()
    return snapShot.data()
  },
  async updatePost({}, payload) {
    await db.collection('posts').doc(payload.id).update({
      title: payload.title,
      content: payload.content,
      updatedAt: timestamp,
    })
  },
}
