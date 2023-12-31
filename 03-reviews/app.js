// 리뷰어 데이터
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "INTERN",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "THE BOSS",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

// 필요한 버튼, 요소 추출
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const randomBtn = document.querySelector(".btn-random");

const img = document.querySelector(".person-img");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const comment = document.querySelector(".comment");

// 현재 ID 값에 해당하는 데이터 슬라이드에 넣어주기
let currentId = 0;

// ID 값에 해당하는 데이터 삽입 함수
const insertData = (id) => {
  img.src = reviews[id].img;
  name.textContent = reviews[id].name;
  job.textContent = reviews[id].job;
  comment.textContent = reviews[id].text;
};

// 양옆 화살표 클릭 함수
const clickArrow = (e) => {
  if (e.target.classList[1] === "fa-chevron-left") {
    currentId = currentId === 0 ? reviews.length - 1 : currentId - 1;
  } else {
    currentId = currentId === reviews.length - 1 ? 0 : currentId + 1;
  }
  insertData(currentId);
};

// 랜덤 버튼 클릭 함수
const clickRandom = () => {
  const randomNum = Math.floor(Math.random() * reviews.length);
  insertData(randomNum);
};

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  img.src = reviews[currentId].img;
  name.textContent = reviews[currentId].name;
  job.textContent = reviews[currentId].job;
  comment.textContent = reviews[currentId].text;
});

prevBtn.addEventListener("click", clickArrow);
nextBtn.addEventListener("click", clickArrow);
randomBtn.addEventListener("click", clickRandom);
