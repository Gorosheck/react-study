import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('new post should be added', () => {

   let action = addPostActionCreator("Text for test");

   let state = {
      postsData: [
         { id: 1, message: 'How are you?', likesCount: 12 },
         { id: 2, message: 'Its my first post', likesCount: 11 },
         { id: 3, message: 'Its my first post', likesCount: 11 },
         { id: 4, message: 'Its my first post', likesCount: 11 }
      ]
   }

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(5);

});


