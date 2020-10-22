import { AdminView } from "../view/AdminView.js";
import { AdminService } from "../service/AdminService.js";
import { AdminComponent } from "../component/AdminComponent.js";
import { UserService } from "../../User/service/UserService.js";
import { UserComponent } from "../../User/component/UserComponent.js";
import { UserEvent } from "../../User/service/UserEvent.js";

export class AdminCTR {
  constructor() {
    this.comp= new AdminComponent();
    this.service = new UserEvent();
    this.self = this;

    // this.view.makeCafeListPage();
    // this.makeCafeListPage();

    // this.view.makeMemberPage();
    // this.makeMemberPage();

    // this.view.makeReviseCafePage();
    // this.makeReviseCafePage();

    this.comp.headerMenu(this.headerMenu, this.self);
    this.comp.admin_menu(this.adminMenu, this.self);
    this.comp.addCafe(this.addCafe, this.self);
    this.comp.reviseCafe(this.search, this.self);
    this.comp.search(this.search, this.self);
    this.comp.cafeList(this.cafeList, this.self)
    this.comp.caffeineList(this.caffeineList, this.self)

  }

  // Listener Components

  async addCafe(cafeData) {
    let event = new AdminEvent();
    let comp = new AdminComponent();
    let result;
    
    for (let value of cafeData.values()) {
      console.log("value-ctr:" + value);
    }
    try {
      result = await event.addCafe(cafeData);
    } catch (e) {
      console.log("error:" + e);
    }
    comp.makeAddCafePage(result);
  }

  async reviseCafe(cafeData) {
    let event = new AdminEvent();
    let comp = new AdminComponent();
    let result;
    
    for (let value of cafeData.values()) {
      console.log("value-ctr:" + value);
    }
    try {
      result = await event.addCafe(cafeData);
    } catch (e) {
      console.log("error:" + e);
    }
    comp.makeReviseCafePage(result);
  }

  async search(cafeData) {
    let event = new AdminEvent();
    let comp = new AdminComponent();
    let result;

    for (let value of cafeData.values()) {
      console.log("value-ctr:" + value);
    }

    try {
      result = await event.search(cafeData);
    } catch (e) {
      console.log("error:" + e);
    }
    comp.makeSearchResultPage(result);
  }

  async cafeList(cafe_id) {
    let event = new UserEvent();
    let comp = new UserComponent();
    let result;

    try {
      result = await event.cafeList(cafe_id);
    } catch (e) {
      console.log("error:" + e);
    }

    comp.makeCafeInfo(result);
  }

  async caffeineList(user_id) {
    let event = new UserEvent();
    let comp = new UserComponent();
    let result;

    try {
      result = await event.caffeineList(user_id);
    } catch (e) {
      console.log("error:" + e);
    }

    comp.makeVisitedCafe(result); //other user's page, it has to be rivesed
  }
  
  async headerMenu(adminData) {
    let event = new AdminEvent();
    let comp = new AdminComponent();
    let result;

    try {
      result = await event.headerMenu(adminData);
    } catch(e) {
      console.log("error:" + e);
    }

    switch (adminData) {
      case "Home":
        comp.makeMainPage(result);
      case "Search":
        comp.makeSearchResultPage(result);
      case "Admin":
        comp.makeCafeListPage(result);
    }
  }

  async adminMenu(adminData) {
    let event = new AdminEvent();
    let comp = new AdminComponent();
    let result;

    try {
      result = await event.adminMenu(adminData);
    } catch(e) {
      console.log("error:" + e);
    }

    switch (adminData) {
      case "Hidden Cafe List":
        comp.makeCafeListPage(result);
      case "Member Management":
        comp.makeMemberPage(result);
      case "Add New Hidden Cafe":
        comp.makeAddCafePage();
      case "Revise Hidden Cafe":
        comp.makeReviseCafePage(result);
    }
  }
  makeAdminHeaderComp() {
    // responsive header
    document
      .getElementsByClassName("js-admin-header-menu")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("clicked Home");
            var result;
            var view = new AdminComponent();
            var service = new AdminService();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeMainPage(result);
              this.makeMainPage();
              console.log("received data:" + result);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("clicked Search");
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                var view = new AdminComponent();
                var service = new AdminService();

                let adminData = new FormData(
                  document.getElementById("js-search-form")
                );
                for (let value of adminData.values()) {
                  console.log("value:" + value);
                }

                result = await service.search(adminData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResultPage(result);
                  this.makeSearchResultPage();
                }
              });
          } else if (e.target.innerHTML.includes("Admin")) {
            console.log("clicked Admin");
            var result;

            let adminData = localStorage.getItem("admin_id");
            console.log("local data:" + adminData);

            var view = new AdminComponent();
            var service = new AdminService();

            try {
              result = await service.callAdminPage(adminData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeCafeListPage(result);
              this.makeCafeListPage();
            }
          }
        } else {
          console.log("you clicked invalid area");
        }
      });
    // header
    document
      .getElementsByClassName("js-admin-header-menu")[1]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (
          e.target.tagname === "UL" ||
          e.target.tagName === "LI" ||
          e.target.tagName === "A"
        ) {
          // console.log('taget' + e.target.tagName)
          if (e.target.innerHTML.includes("Home")) {
            console.log("clicked Home");
            var result;

            var view = new AdminComponent();
            var service = new AdminService();

            try {
              result = await service.callMain();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeMainPage(result);
              this.makeMainPage();
              console.log("received data:" + result);
            }
          } else if (e.target.innerHTML.includes("Search")) {
            console.log("clicked Search");
            document
              .getElementsByClassName("js-search-btn")[0]
              .addEventListener("click", async (e) => {
                e.preventDefault();
                var result;

                let adminData = new FormData(
                  document.getElementById("js-search-form")
                );
                var view = new AdminComponent();
                var service = new AdminService();

                for (let value of adminData.values()) {
                  console.log("value:" + value);
                }
                result = await service.search(adminData);

                if (result === undefined || result === "undefined") {
                  console.log("CTR-return-error:" + result);
                } else {
                  console.log("컨트롤러-서비스 결과값:" + result);

                  view.makeSearchResultPage(result);
                  this.makeSearchResultPage();
                }
              });
          } else if (e.target.innerHTML.includes("Admin")) {
            console.log("clicked Admin");
            var result;

            let adminData = localStorage.getItem("admin_id");
            console.log("local data:" + adminData);

            var view = new AdminComponent();
            var service = new AdminService();

            try {
              result = await service.callAdminPage(adminData);
            } catch (e) {
              console.log("error: " + e);
            }

            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeCafeListPage(result);
              this.makeCafeListPage();
            }
          }
        } else {
          console.log("you clicked invalid area");
        }
      });
  }

  makeAdminMenuComp() {
    console.log("admin menu - CTR");
    document
      .getElementsByClassName("js-admin-menu")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();

        if (e.target.tagName === "A" || e.target.tagName === "I") {
          if (e.target.innerHTML.includes("Hidden Cafe List")) {
            console.log("clicked Hidden Cafe List");
            let result;
            // local storage에 admindata 담아줘야 하나??
            let view = new AdminComponent();
            let service = new AdminService();

            try {
              result = await service.callCafeList();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeCafeListPage(result);
              this.makeCafeListPage();
              console.log("cafe list:" + result);
            }
          } else if (e.target.innerHTML.includes("Member Management")) {
            console.log("clicked Member Management");
            let result;
            let view = new AdminComponent();
            let service = new AdminService();
            try {
              result = await service.callMemberList();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              view.makeMemberPage(result);
              this.makeMemberPage();
              console.log("user list:" + result);
            }
          } else if (e.target.innerHTML.includes("Add New Hidden Cafe")) {
            console.log("clicked Add Cafe");
            let view = new AdminComponent();

            view.makeAddCafePage();
            this.makeAddCafePage();
          } else if (e.target.innerHTML.includes("Revise Hidden Cafe")) {
            console.log("clicked Revise Cafe");
            var result;
            let view = new AdminComponent();
            let service = new AdminService();
            try {
              result = await service.callReviseCafe();
            } catch (e) {
              console.log("error: " + e);
            }
            if (result === undefined || result === "undefined") {
              console.log("CTR-result is undefined" + result);
              return;
            } else {
              console.log("user list:" + result);
              view.makeReviseCafePage(result);
              this.makeReviseCafePage();
            }
          }
        } else {
          console.log("you clicked ivalid area");
        }
      });
  }

  makeCaffeineListComp() {
    document
      .getElementsByClassName("js-caffeine-list")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("CTR-CAFE: " + e.target.innerHTML);
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);
          let value = found.join();
          var result;
          var view = new UserComponent();
          var service = new UserService();

          try {
            result = await service.searchCafeInfo(value);
          } catch (e) {
            console.log("error:" + e);
          }
          view.makeVisitedCafe(result); //other person's page
          this.makeVisitedCafe();
        } else {
          console.log("you clicked invalid area:" + e.target.tagName);
        }
      });
  }
  makeCafeListComp() {
    document
      .getElementsByClassName("js-cafe-list")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.tagName === "H3" || e.target.tagName === "A") {
          let str = String(e.target.innerHTML);
          var result;
          var service = new UserService();
          let view = new UserComponent();
          let pattern = /(?!value=")\d{0,99999}(?<!\")/;
          let found = str.match(pattern);
          let value = found.join();

          try {
            result = await service.searchCafeInfo(value);
          } catch (e) {
            console.log("error:" + e);
          }
          view.makeCafeInfo(result);

          document
            .getElementsByClassName("js-cafe-review-btn")[0]
            .addEventListener("click", async (e) => {
              e.preventDefault();
              var result;
              var service = new UserService();

              let userData = new FormData(
                document.getElementById("js-cafe-review-form")
              );
              for (let value of userData.values()) {
                console.log("value:" + value);
              }

              result = await service.settings(userData);

              if (result === undefined || result === "undefined") {
                console.log("CTR-return-error:" + result);
                this.view.makeCafeInfo();

                this.makeCafeInfo();
              } else {
                console.log("컨트롤러-서비스 결과값: " + result);
                alert("성공적으로 등록되었습니다.");
                this.view.makeCafeInfo(); //새로 더한 리뷰 추가해서 페이지 다시 만들기
                this.makeCafeInfo();
              }
            });
        } else {
          console.log("you clicked invalid area:" + e.target.tagName);
        }
      });
  }
  makeAddCafeComp() {
    document
      .getElementsByClassName("js-admin-addcafe-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;

        let cafeData = new FormData(this.addcafe_btn);
        for (let value of cafeData.values()) {
          console.log("value: " + value);
        }

        let service = new AdminService();
        result = await service.addCafe(cafeData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
          view.makeAddCafePage();
          this.makeAddCafePage();
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          view.makeAddCafePage();
          this.makeAddCafePafe();
          alert("입력하신 카페가 성공적으로 등록되었습니다.");
        }
      });
  }
  makeLoadCafeComp() {
    document
      .getElementsByClassName("js-admin-revisecafe-load-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;

        let cafeData = new FormData();

        let service = new AdminService();
      });
  }
  makeReviseCafeComp() {
    document
      .getElementsByClassName("js-admin-revisecafe-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;
        let view = new AdminComponent();
        let service = new AdminService();

        let cafeData = new FormData(
          document.getElementById("js-admin-revisecafe-form")
        );
        for (let value of cafeData.values()) {
          console.log("value: " + value);
        }

        result = service.reviseCafe(cafeData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
          view.makeReviseCafePage(result);
          this.makeReviseCafePage();
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          view.makeReviseCafePage(result);
          this.makeReviseCafePage();
          alert("입력하신 카페가 성공적으로 수정되었습니다.");
        }
      });
  }

  makeSearchComp() {
    document
      .getElementById("js-search-btn")
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;

        let view = new AdminComponent();
        let adminData = new FormData(view.search_form);
        for (let value of adminData.values()) {
          console.log("vlaue:" + value);
        }

        let service = new AdminService();
        result = await service.search(adminData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          view.makeSearchResultPage(result);
          this.makeSearchResultPage();
        }
      });
  }
}
