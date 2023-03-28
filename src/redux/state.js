let state = {
   profilePage: {
      postsData: [
         { id: 1, message: 'How are you?', likesCount: 12 },
         { id: 2, message: 'Its my first post', likesCount: 11 },
         { id: 3, message: 'Its my first post', likesCount: 11 },
         { id: 4, message: 'Its my first post', likesCount: 11 }
      ]
   },
   dialogsPage: {
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you' },
         { id: 3, message: 'Yo' }
      ],
      dialogs: [
         { id: 1, name: 'Леша', imgUrl: 'https://pingwin.by/templates/pingwin_tpl/images/logo_web.webp' },
         { id: 2, name: 'Артем', imgUrl: 'https://pingwin.by/templates/pingwin_tpl/images/logo_web.webp' },
         { id: 3, name: 'Дима', imgUrl: 'https://pingwin.by/templates/pingwin_tpl/images/logo_web.webp' },
         { id: 4, name: 'Лагуна', imgUrl: 'https://pingwin.by/templates/pingwin_tpl/images/logo_web.webp' },
         { id: 5, name: 'Андрей', imgUrl: 'https://pingwin.by/templates/pingwin_tpl/images/logo_web.webp' }
      ]
   }
}

export default state;