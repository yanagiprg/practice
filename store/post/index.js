/* eslint-disable no-empty-pattern */
import _ from 'lodash'
import firebase from '@/plugins/firebase'
import 'firebase/firestore'

const db = firebase.firestore()

export const state = () => ({
  posts: [],
})

export const getters = {
  posts(state) {
    console.log(state.posts, 'state.posts')
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
    console.log(snapShot, 'postList')
    commit('setPosts', postList)
  },
  async addPost({}, payload) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    await console.log('addPost', payload)
    const res = await db.collection('posts').add({})
    console.log(db.collection('posts').doc(res.id), 'aaa')
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
}
