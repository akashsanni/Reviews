let peoples = [
    {
        "img":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        "author": "Susan Smith",
        "designation": "WEB DEVELOPER",
        "info": "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"

    },
    {
        "img":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        "author": "Anna Johnson",
        "designation": "WEB DESIGNER",
        "info": "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee eauthorl pin fashion axe.photo booth jean shorts artisan narwhal."
    }
,
   {
    "img":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    "author": "Peter Jones",
    "designation": "INTERN",
    "info": "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
,
   {
    "img":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    "author": "Bill Anderson",
    "designation": "SOFTWARE DEVELOPER",
    "info": "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        "img":"https://lh3.googleusercontent.com/a/AEdFTp5afdi3rM4Q_p-OGAZdz6Vqa-rYw37Vn-J_GoXWZw=s324-p-rw-no",
        "author": "Akash Sanni",
        "designation": "THE BOSS",
        "info": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis. Eum eaque corrupti ducimus, quibusdam laboriosam provident ut distinctio quas hic ad repellat totam ipsum modi quos voluptate amet quia facere optio consequuntur. Harum inventore facere est doloremque iure, consequuntur labore error perspiciatis ipsa autem, blanditiis doloribus a recusandae aliquam, ex quasi. Ipsa eum laboriosam provident, dolore nemo atque quaerat."
        }

  ]



//   console.log(peoples)


const img = document.querySelector('.person-img')
const author = document.querySelector('.author')
const design = document.querySelector('.designation')
const info = document.querySelector('.info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const surpriseBtn = document.querySelector('.suprise-btn')

let count = 0 

window.addEventListener('DOMContentLoaded',function(){
    const item = peoples[count]
    img.src = item.img
    author.textContent = item.author
    design.textContent = item.designation
    info.textContent = item.info
});

function showPerson(person){
    const item = peoples[count]
    img.src = item.img
    author.textContent = item.author
    design.textContent = item.designation
    info.textContent = item.info
}

nextBtn.addEventListener('click', function(){
    count++
    // console.log(count)
    if(count > peoples.length - 1)
        count = 0
    
    showPerson(count)
})

prevBtn.addEventListener('click',function(){
    count--
   if(count < 0 )
        count = peoples.length -1 
    
    showPerson(count)
})

surpriseBtn.addEventListener('click',function(){
    // console.log('hhh')
    
    count = Math.floor(Math.random() * peoples.length);
    showPerson(count)
})