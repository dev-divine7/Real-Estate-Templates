let mobileMenu = document.querySelector('.mobile-menu');

// MAIN MENU 
const menuToggle = () => {
  let menuIcon  = mobileMenu.querySelector(".menu-icon");
  let menu = mobileMenu.querySelector(".menu");
  const toggle = () => {
    if (menu.id === "translateX100") {
      menu.id = "translateX0";
      menuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
      menu.id = "translateX100";
      menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
  }
  
  menuIcon.addEventListener("click", toggle)
}

// LIST MENU || MOBILE VIEWS
const listMenu = () => {
  let dropListMenu = mobileMenu.querySelectorAll(".drop-down");
  let opt1 = mobileMenu.querySelector(".opt1");
  let opt2 = mobileMenu.querySelector(".opt2");
  let opt3 = mobileMenu.querySelector(".opt3");
  
  console.log(opt1.classList);
  
  const openListMenu1 = () => {
    opt1.classList.toggle("hidden");
    
    dropListMenu.forEach((list, index) => {
      if (index === 0) {
        if (!opt1.classList.contains("hidden")) {
        list.classList.remove("fa-chevron-down");
        list.classList.add("fa-chevron-up");
      } else {
        list.classList.add("fa-chevron-down");
        list.classList.remove("fa-chevron-up");
      };
      }
    });
  }
  
  const openListMenu2 = () => {
    opt2.classList.toggle("hidden");
    
    dropListMenu.forEach((list2, index) => {
      if (index === 1) {
        if (!opt2.classList.contains("hidden")) {
        list2.classList.remove("fa-chevron-down");
        list2.classList.add("fa-chevron-up");
      } else {
        list2.classList.add("fa-chevron-down");
        list2.classList.remove("fa-chevron-up");
      };
      }
    });
  }
  
  const openListMenu3 = () => {
    opt3.classList.toggle("hidden");
    
    dropListMenu.forEach((list3, index) => {
      if (index === 2) {
        if (!opt3.classList.contains("hidden")) {
        list3.classList.remove("fa-chevron-down");
        list3.classList.add("fa-chevron-up");
      } else {
        list3.classList.add("fa-chevron-down");
        list3.classList.remove("fa-chevron-up");
      };
      }
    });
  }
  
  dropListMenu.forEach((dropMenu, index) => {
    if (index === 0) {
      dropMenu.addEventListener("click", openListMenu1);
    } else if (index === 1) {
      dropMenu.addEventListener("click", openListMenu2);
    } else {
      dropMenu.addEventListener("click", openListMenu3);
    }
  });
};

// LIST MENU || DESKTOP VIEWS
const listOpt = () => {
  let ul = document.querySelectorAll(".menu-list ul");
  let a = document.querySelectorAll(".menu-list .list-opt");
  
  const toggleSelection = () => {
    ul.forEach((ul, index) => {
      if (index === 0) {
        ul.classList.toggle("hidden");
      }
    });
  };
  const toggleSelection1 = () => {
    ul.forEach((ul, index) => {
     if (index === 1) {
        ul.classList.toggle("hidden");
     }
    });
  };
  const toggleSelection2 = () => {
    ul.forEach((ul, index) => {
     if (index === 2) {
        ul.classList.toggle("hidden");
     }
    });
  };
  
  a.forEach((a, index) => {
    if (index === 0) {
      a.addEventListener("mouseover", toggleSelection);
    } else if (index === 1) {
      a.addEventListener("mouseover", toggleSelection1);
    } else {
      a.addEventListener("mouseover", toggleSelection2);
    }
  });
};

// FILTER
const filter = () => {
  let all = document.querySelector("#all");
  let buy = document.querySelector("#buy");
  let rent = document.querySelector("#rent");
  let buyHouses = document.querySelectorAll(".buy");
  let rentHouses = document.querySelectorAll(".rent");
  
  const buyHouse = () => {
    rentHouses.forEach((rent) => {
      rent.classList.add("hidden");
    });
    buyHouses.forEach((buy) => {
      if (buy.classList.contains("hidden")) {
        buy.classList.remove("hidden");
      }
    });
  }
  const rentHouse = () => {
    buyHouses.forEach((buy) => {
      buy.classList.add("hidden");
    });
    rentHouses.forEach((rent) => {
      if (rent.classList.contains("hidden")) {
        rent.classList.remove("hidden");
      }
    });
  }
  const allHouse = () => {
    buyHouses.forEach((buy) => {
      buy.classList.remove("hidden");
    });
    rentHouses.forEach((rent) => {
      rent.classList.remove("hidden");
    });
  }
  
  buy.addEventListener("click", buyHouse);
  rent.addEventListener("click", rentHouse);
  all.addEventListener("click", allHouse);
}
filter();

// FIX YEAR 
const currentYear = () => {
  let date = new Date();
  let year = document.querySelector(".year");
  year.innerHTML = date.getUTCFullYear().toString();
}
currentYear();

// MOBILE FUCTIONS ALLOWED TO RUB
const mobileFuction = () => {
  if (window.innerWidth <= 985) {
    listMenu();
    menuToggle();
  };
};
mobileFuction();

// DESKTOP FUNCTIONS ALLOWED TO RUN
const desktopFuction = () => {
  let menu = mobileMenu.querySelector(".menu");
  if (window.innerWidth >= 985) {
    menu.classList.remove("hidden");
    listOpt();
  };
};
desktopFuction();



// ANIMATE ON SCROLL SCRIPT
AOS.init({
  delay: 200,
  duration: 800,
  once: true,
});
