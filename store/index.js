// import _ from 'lodash'
// import firebase from '@/plugins/firebase'
// import 'firebase/firestore'

// const db = firebase.firestore()

// export const state = () => ({
//   posts: [],
// })

// export const getters = {
//   posts(state) {
//     console.log(state.posts, 'state.posts')
//     return state.posts
//   },
// }

// export const mutations = {
//   setPosts(state, posts) {
//     state.posts = _.cloneDeep(posts)
//   },
// }

// export const actions = {
//   async getPosts({ commit }) {
//     const postList = []
//     const snapShot = await db
//       .collection('posts')
//       // .orderBy('updatedAt', 'desc')
//       .get()
//     snapShot.forEach((doc) => {
//       postList.push(doc.data())
//     })
//     console.log(snapShot, 'postList')
//     commit('setPosts', postList)
//   },
//   deletePost() {
//     console.log('deletePost')
//   },
// }
