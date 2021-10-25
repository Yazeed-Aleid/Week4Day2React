function Tweets (){
   let users =
   [
       {name:'Yazeed',pic:'https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png',tweets:['السلام عليكم','كيف الحال']},
       {name:'Khalid',pic:'https://image.pngaaa.com/332/565332-middle.png',tweets:[' Good Morning','hi ']},
       {name:'Maha',pic:'https://cdn.imgbin.com/21/23/1/imgbin-computer-icons-female-user-profile-avatar-material-x1Zz1EDVQQssccaQu0dy0VFGy.jpg',tweets:['Whats up ','JS is good']}
   ]
   return(
       <div >
           {users.map(x =><div>
            <h1>{x.name}</h1>
            <img src = {x.pic}/>
             {x.tweets.map(y => <li>{y}</li>)  }
           </div>  )}
           
       </div>
   )
}
export default Tweets