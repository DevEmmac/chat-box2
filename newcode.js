let commentContainer =  
    document.getElementById("comment-container"); 
  
function createInputBox() { 
    let div = document.createElement("div"); 
  
    div.setAttribute("class", "comment-details"); 
  
    div.innerHTML += `<input type="text"
                             placeholder="add text here"
                             class="input" /> 
                      <button class="btn submit"> 
                           send 
                      </button>`; 
    return div; 
} 
  
function addReply(text) { 
    let div = document.createElement("div"); 
  
    div.setAttribute("class", "all-comment"); 
      
    div.innerHTML += `<div class="card"> 
                       <div class= "image-box">
                           
                           <div class = "sub-image">
                               <div class="firstline">
                                  <div class="secondline"></div>
                                  <img src= "./image/use.jpg">
                                </div>
                           </div>
                          <span class="text">${text}</span>
                            <div class="curve"></div>
                       </div>
                       <h3> 2 min
                      <span id="reply" class="reply">Reply 
                      </span></h3></div>`; 
    return div; 
} 
  
commentContainer.addEventListener("click", function (e) { 
    let replyClicked = 
        e.target.classList.contains("reply"); 
    let submitClicked = 
        e.target.classList.contains("submit"); 
    let closestCard = 
        e.target.closest(".all-comment"); 
  
    if (replyClicked) { 
        closestCard.appendChild(createInputBox()); 
    } 
  
    if (submitClicked) { 
        const commentDetails = 
            e.target.closest(".comment-details"); 
        if (commentDetails.children[0].value) { 
            closestCard.appendChild( 
                addReply(commentDetails.children[0].value)); 
            commentDetails.remove(); 
        } 
    } 
});