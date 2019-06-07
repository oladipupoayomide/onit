//Blog posts
const blogs=[
    {
        title:"Fishery in nijgeria",
        imgUrl:"https://www.pexels.com/photo/man-sitting-on-boat-2369762/",
        body:"e Fisheries society of Nigeria (FISON) was founded in 1976 by some few civil service based enthusiasts to promote the development of the fisheries profession and related disciplines in Nigeria, Africa and internationally. Today the membership of the society has expanded cutting across all the related disciplines including fisheries scientists, fishing companies and professional industrial fishing/fish farming enthusiasts and entrepreneurs. The Nigerian Journal of Fisheries is aimed at encouraging needed research into multivariate fisheries development options for national and international benefits and also providing the forum for dissemination of scientific findings in all aspects of fisheries for progressive development. It aims to serve individuals, industrialists and most importantly members of academia.",
         datePublised: new Date()
},
{
    title:"Fishery in nigeyuria",
    imgUrl:"https://www.pexels.com/photo/man-sitting-on-boat-2369762/",
    body:"e Fisheries society of Nigeria (FISON) was founded in 1976 by some few civil service based enthusiasts to promote the development of the fisheries profession and related disciplines in Nigeria, Africa and internationally. Today the membership of the society has expanded cutting across all the related disciplines including fisheries scientists, fishing companies and professional industrial fishing/fish farming enthusiasts and entrepreneurs. The Nigerian Journal of Fisheries is aimed at encouraging needed research into multivariate fisheries development options for national and international benefits and also providing the forum for dissemination of scientific findings in all aspects of fisheries for progressive development. It aims to serve individuals, industrialists and most importantly members of academia.",
     datePublised: new Date()
},
]
for(let i=0; i < blogs.length; i++)
 {
    document.getElementById("posts").innerHTML=`<h1>${blogs[i].title}</h1>


    
     <div>${blogs[i].body}</div>
     <div><img src="${blogs.imgUrl}"/> </div>
     <span> ${blogs[i].datePublised} <span>`
 };
 
 
//   function loadPosts()
//   {
//     const output=" ";
//     blogs.forEach((post)=>
//     {
//        output +=`<h1> ${post.title} </h1>
//        <div> ${post.imgUrl} </div>
//        <div> ${post.body} </div>`
//        ;
//      });
//      console.log(output);
// };
// loadPosts();
/*
const params = new URLSearchParams(window.location.search);

// get the ID from the query string
const postId = params.get("id");

if (!postId) {
    alert("Error! Invalid post ID!!!");
    window.location = "index.html";
}
const post = getPost(postId);
render(post);

function render(post) {
    const body = document.getElementById("post");
    document.title = post.title; // update page title

    const postTitle = document.createElement("h2");
    postTitle.innerText = post.title;
    const postContent = document.createElement("p");
    postContent.innerText = post.content;
    const postBody = document.createElement("div");

    // update the dom
    postBody.appendChild(postTitle);
    postBody.appendChild(postContent);
    body.appendChild(postBody);
    
}
*/