console.log("Hello");
let apikey="0852472cb4c64f058e3e5dc17a803808";
let source=`https://newsapi.org/v2/everything?q=bbc-news&from=2022-05-22&sortBy=popularity&apiKey=${apikey}`

xhr=new XMLHttpRequest();
xhr.open('GET',source,true);
xhr.onprogress=function(){
    console.log("In Progress...")
}
xhr.onload=function(){
    if(this.status===200){
        let obj=JSON.parse(this.responseText);
        console.log(obj)
        // console.log(obj.articles[0].content);
        // console.log(obj.articles[0].title);
        let html="";
        let cnt=1;
        for(key in obj.articles){
            html+=`
            <div class="accordion-item my-5">
            <h5 class="accordion-header" id="heading${cnt}>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cnt}" aria-expanded="true" aria-controls="collapse${cnt}">
              <font color="blue">> ${obj.articles[key].title}</font>
              </button>
            </h5>
            <div id="collapse${cnt}" class="accordion-collapse collapse" aria-labelledby="heading${cnt}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${obj.articles[key].content} <a href="${obj.articles[key].url}" target="_blank">Read more here</a>
              </div>
            </div>
          </div>
            `;
            cnt+=1;
        }
        accordionExample.innerHTML=html;
    }else{
        console.log("---Some Error Occured---");
    }
}
xhr.send();