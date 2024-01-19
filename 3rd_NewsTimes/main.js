// 제일 먼저 해야 할 일 : 뉴스 불러오기(url 주소 적어주기)
const apiKey = `9c67f94e2d3b408193fa3613c75374cc`;
let newsList = []; // 다른 곳에서도 많이 쓸거기 때문에 전역변수로 선언
const menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));

let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);

let totalResults = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;


const getNews = async () => {
    try {
        // 우리가 전달받은 url 뒤에다가 페이지네이션 정보를 붙이자
        url.searchParams.set("page", page); // ➡️ &page = page
        url.searchParams.set("pageSize", pageSize);
        
        const response = await fetch(url);      
        const data = await response.json();

        if(response.status === 200 ){
            if(data.articles.length === 0) {
                throw new Error("No result for this search");
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            // render함수는 newsList가 확정됐을 때 써줄 수 있음
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        }
        
    } catch (error) {
        errorRender(error.message);
    }
};

const getLatestNews = async () => {
    // js 에서는 개발자가 쓸 메소드를 미리 만들어 놓음 
    // url 메소드를 쓰면서 사용하는 함수를 미리 js에서 만들어 줬음 (URL 인스턴스)
    url = new URL(`
        https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}
    `);
    
    getNews();
    
}

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    // 뉴스를 가지고 오기 위해서는 url이 필요
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${apiKey}`);
    
    getNews();
    
};

const getNewsByKeyword = async () => {
    const keyword = document.getElementById("search-input").value;
    
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${apiKey}`);
    
    getNews();
};

// ui 관련 함수
const render = () => {
    const newsHTML = newsList.map(news => `
    <div class="row news">
    <div class="col-lg-4">
    <img class="news-img-size" src=${news.urlToImage}>
    </div>
    <div class="col-lg-8">
    <h2>${news.title}</h2>
    <p>${news.description}</p>
    <div>${news.source.name} | ${news.publishedAt}</div>
    </div>
    </div>
    `).join("");
    
    document.getElementById("news-board").innerHTML = newsHTML;
}

const errorRender = (errorMassage) => {
    const errorHTML = `
        <div class="alert alert-danger" role="alert">
            ${errorMassage}
        </div>
    `;

    document.getElementById("news-board").innerHTML = errorHTML;
};

const paginationRender = () => {
    // totalPages
    const totalPages = Math.ceil(totalResults / pageSize);
    // pageGroup 내가속한페이지/groupSize
    const pageGroup = Math.ceil(page / groupSize);
    // lastPage
    let lastPage = pageGroup * groupSize;
    // 마지막 페이지 그룹이 우리가 설정한 그룹 사이즈보다 작다면? lastPage = totalPage
    if(lastPage > totalPages) {
        lastPage = totalPages;
    }

    // firstPage
    const firstPage = 
        lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
        
        
    let paginationHTML = `<li class="page-item" onClick="moveToPage(${page - 1})"><a class="page-link" href="#">Previous</a></li>`;

    for (let i = firstPage; i < lastPage; i++) {
        paginationHTML += `<li class="page-item ${
            i === page? "active" : ""
        }
        " onclick = "moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>`;
    };
    paginationHTML += `<li class="page-item" onClick="moveToPage(${page + 1})"><a class="page-link" href="#">Next</a></li>`;

    document.querySelector(".pagination").innerHTML = paginationHTML;

    // <nav aria-label="Page navigation example">
    //     <ul class="pagination">
    //         <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    //         <li class="page-item"><a class="page-link" href="#">1</a></li>
    //         <li class="page-item"><a class="page-link" href="#">2</a></li>
    //         <li class="page-item"><a class="page-link" href="#">3</a></li>
    //         <li class="page-item"><a class="page-link" href="#">Next</a></li>
    //     </ul>
    // </nav>
};

const moveToPage = (pageNum) => { 
    page = pageNum; // 페이지 넘버가 바뀌니까 한번 갱신해줌
    getNews();  // 다시 뉴스를 호출 
};

getLatestNews();

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
};
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
};
const openSearchBox = () => {
    let inputArea = document.getElementById("input-area");
    if (inputArea.style.display === "inline") {
        inputArea.style.display = "none";
    } else {
        inputArea.style.display = "inline";
    }
};