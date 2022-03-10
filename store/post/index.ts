/* eslint-disable no-empty-pattern */
import _ from 'lodash'
import firebase from '@/plugins/firebase'
import 'firebase/firestore'
import { Post } from '@/types/models'
import { S, G, M, A } from '@/store/post/type'
import type { Getters, Mutations, Actions } from 'vuex'

const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export const initialState: S = {
  posts: [],
}

export const state = (): S => Object.assign({}, initialState)

export const getters: Getters<S, G> = {
  getPostList(state: S) {
    return state.posts
  },
}

export const mutations: Mutations<S, M> = {
  setPostList(state: S, posts: Post[]) {
    state.posts = _.cloneDeep(posts)
  },
}

export const actions: Actions<S, A, G, M> = {
  async fetchPostList({ commit }) {
    const postList: Post[] = []
    const snapShot = await db
      .collection('posts')
      .orderBy('updatedAt', 'desc')
      .get()
    snapShot.forEach((doc) => {
      const data = doc.data() as Post
      postList.push(data)
    })
    commit('setPostList', postList)
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
