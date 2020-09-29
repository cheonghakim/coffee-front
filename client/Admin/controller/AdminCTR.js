import { AdminView } from "../view/AdminView.js";
import { AdminService } from "../service/AdminService.js";
import { AdminComponent } from "../view/AdminComponent.js";
import { UserService } from "../../User/service/UserService.js";
import { UserComponent } from "../../User/view/UserComponent.js";
import { UserCTR } from "../../User/controller/UserCTR.js";

export class AdminCTR {
  constructor(adminService, adminView, userCTR, userView) {
    this.view = adminView;
    this.service = adminService;
    this.userCTR = userCTR;
    this.userView = userView;


    // this.view.makeCafeListPage();
    // this.makeCafeListPage();

    // this.view.makeMemberPage();
    // this.makeMemberPage();

    // this.view.makeReviseCafePage();
    // this.makeReviseCafePage();
  }

  // admin listener pages

  // makeMainPage() {
  //   this.makeAdminHeaderComp();
  //   this.makeCaffeineListComp();
  //   this.makeCafeListComp();
  // }

  makeCafeListPage() {
    this.makeAdminHeaderComp();
    this.makeAdminMenuComp();
    this.makeSavedCafeListComp();
  }

  makeMemberPage() {
    this.makeAdminHeaderComp();
    this.makeAdminMenuComp();
    this.makeMemberListComp();
  }

  makeAddCafePage() {
    this.makeAdminHeaderComp();
    this.makeAdminMenuComp();
    this.makeAddCafeComp();
  }

  makeReviseCafePage() {
    this.makeAdminHeaderComp();
    this.makeAdminMenuComp();
    // this.makeLoadCafeComp();
    this.makeReviseCafeComp();
  }

  makeSearchResultPage() {
    this.makeAdminHeaderComp();
    this.makeCafeListComp();
  }

  makeCafeInfoPage() {
    this.makeAdminHeaderComp();
    this.makeAdminMenuComp();
    this.makeCafeListComp();
  }

  // Listener Components

  makeAdminHeaderComp() {
    // responsive headers
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
              this.userView.addScript();
              this.userView.makeAdminMain(result);
              this.userCTR.makeAdminMain();
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

            let adminData = localStorage.getItem("user_id");
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
              this.userView.addScript();
              this.userView.makeAdminMain(result);
              this.userCTR.makeAdminMain();
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

            let adminData = localStorage.getItem("user_id");
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

  makeAddCafeComp() {
    document
      .getElementsByClassName("js-admin-addcafe-btn")[0]
      .addEventListener("click", async (e) => {
        e.preventDefault();
        var result;

        let cafeData = new FormData(
          document.getElementById("js-admin-addcafe-form")
        );
        for (let value of cafeData.values()) {
          console.log("value: " + value);
        }

        let service = new AdminService();
        result = await service.addCafe(cafeData);

        if (result === undefined || result === "undefined") {
          console.log("CTR-return-error:" + result);
          // let view = new AdminView();
          view.makeAddCafePage();
          this.makeAddCafePage();
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          // let view = new AdminView();
          view.makeAddCafePage();
          this.makeAddCafePage();
          alert("입력하신 카페가 성공적으로 등록되었습니다.");
        }
      });
  }

  makeReviseCafeComp() {
    document
      .getElementsByClassName("js-admin-revisecafe-btn")[1]
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
          alert("입력하신 카페 수정이 실패했습니다.");
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
          alert("입력하신 카페가 성공적으로 수정되었습니다.");
        }
      });
  }

  makeCafeListComp() {
    //Userview의   makeSearchResult 에서 클래스 추가
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
                this.view.makeCafeInfo(result);
                this.makeCafeInfo();
              } else {
                console.log("컨트롤러-서비스 결과값: " + result);
                alert("성공적으로 등록되었습니다.");
                this.view.makeCafeInfo(result); //새로 더한 리뷰 추가해서 페이지 다시 만들기
                this.makeCafeInfo();
              }
            });
        } else {
          console.log("you clicked invalid area:" + e.target.tagName);
        }
      });
  }

makeReviseCafeComp() {
    document
      .getElementsByClassName("js-admin-revisecafe-btn")[1]
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
          alert("입력하신 카페 수정이 실패했습니다.");
        } else {
          console.log("컨트롤러-서비스 결과값:" + result);
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
