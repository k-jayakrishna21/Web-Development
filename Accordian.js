let accordians = document.querySelectorAll(".accordian");

accordians.forEach((accor)=>{
    accor.addEventListener("click",()=>{
        accordians.forEach((subAccor)=>{
            subAccor.classList.remove("active");
            let icon = subAccor.querySelector("i");
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        })

        accor.classList.add("active");

        let i = accor.querySelector(".fa-plus");
        i.classList.remove("fa-plus");
        i.classList.add("fa-minus");
    })
})