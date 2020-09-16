/*
 * main -> makeAdminHeader + makeMainCaffeineList + makeMainCafeList + makeFooter(common) + makeSearchPop
 * dashboard -> makeAdminHeader + makeUserMenu + makeDashboard + makeFooter(common) + makeSearchPop
 * my hidden -> makeAdminHeader + makeUserMenu + makeListAndMap + makeHalfListItem(한개씩 추가) + makeFooter + makeSearchPop
 * my subscription -> makeAdminHeader + makeUserMenu + makeMySubscription + makeSubscriptionList(한개씩 추가) + makeFooter(common) + makeSearchPop
 * add cafe -> makeAdminHeader + makeAddCafe + makeFooter(common) + makeSearchPop
 * setting ->  makeAdminHeader + makeUserMenu + makeProfile + makeFooter(common) + makeSearchPop
 *
 * ml-placessec 대신 row에 클래스줌, 유저메뉴에 ul, 만들고 클래스줌 이벤트 델리게이션 안돼면 아이디로 변환할 것
 * 프로필 세팅에 프로필 이미지미리보기 js-thumnail, js-upload-profile, 백그라운드 미리보기 js-back-img, js-upload-back-img
 */

export class UserView {
  constructor() {}

  makeTest() {
    let a = ` <div class="accountformfield">
    <label>ID</label>
    <input type="text" class="js-signin-input" placeholder="Creative Layers" />
  </div>
  <div class="accountformfield">
    <label>Password</label>
    <input type="password" class="js-signin-input" />
  </div>
  <p class="c-label">
    <input name="cb" id="cb1" type="checkbox" /><label for="cb1"
      >Remember me?</label
    >
  
  <a href="#" title="">Lost your password?</a></p>
  <button type="button" id="js-signin-btn">Sign In</button>
</div>`;
    return a;
  }
  makeMainTest() {
    let main = `<div class="page-loading">
  <img src="images/loader.gif" alt="" />
  <span>Skip Loader</span>
</div>

<div class="theme-layout">  
  <div class="responsiveheader">
    <div class="rheader">
 
      <div class="logo">
        <a href="#" title=""
          ><img src="images/hiddenc_logo.png" alt=""
        /></a>
      </div>
      <div class="extras extra_top">
        <span class="accountbtn account_text">Start</i></span>
      </div>
    </div>
    
  </div>
  <!-- Responsive header -->

  <header class="header_color">
    <div class="container fluid">
      <div class="logo">
        <a href="#" title=""
          ><img src="images/hiddenc_logo.png" alt=""
        /></a>
      </div>
      <div class="extras extra_top">
        <span class="accountbtn account_text">Start</span>
      </div>
    </div>
  </header>

  <section>
    <div class="block no-padding main_img" >
      <div class="layer blackish">
        <div
          data-velocity="-.1"
          style="
            background: url(images/cafe_main.jpg) repeat scroll 50% 422.28px
              transparent;
          "
          class="no-parallax parallax scrolly-invisible main_img"
        ></div>
        
        <!-- PARALLAX BACKGROUND IMAGE -->
        <div class="container">
          <div class="row justify-content-center main_section">
            <div class="col-lg-8 ">
              <div class="listingsf" style="margin-top: 50%">
                <h3>Explore hidden cafe</h3>
                <p>
                  Let's uncover the best places to eat and drink nearest to
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="popupsec">
    <div class="popup">
      <div class="accounttabs">
        <span class="closepopup"><i>+</i></span>
        <ul class="ctabs group">
          <li><a href="#/one" class="active">Sign In</a></li>
          <li><a href="#/two">Sign Up</a></li>
        </ul>
        <div id="content">
          <div class="accountform" id="one">
            <div class="loginform js-signin-input" >
              <div class="accountformfield">
                <label>ID</label>
                <input type="text" class="js-signin-input" placeholder="John123" />
              </div>
              <div class="accountformfield">
                <label>Password</label>
                <input type="password" class="js-signin-input" />
              </div>
              <p class="c-label">
                <input name="cb" id="cb1" type="checkbox" /><label for="cb1"
                  >Remember me?</label
                >
              
              <a href="#" title="">Lost your password?</a></p>
              <button type="submit" class="js-signin-btn">Sign In</button>
            </div>
            <div class="extraconnect">
              <span>Or Connect With Social Networks</span>
              <div class="social">
                <a class="facebook" href="#" title=""
                  ><i class="fa fa-facebook"></i
                ></a>
                <a class="twitter" href="#" title=""
                  ><i class="fa fa-twitter"></i
                ></a>
                <a class="googleplus" href="#" title=""
                  ><i class="fa fa-google"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="accountform" id="two" style="display: none">
            <div class="loginform js-signup-input">
              <div class="accountformfield">
                <label>ID</label>
                <input type="text" class="js-signup-input" placeholder="maxpower123" />
              </div>
              <div class="accountformfield">
                <label>Password</label>
                <input type="password" class="js-signup-input"/>
              </div>
              <div class="accountformfield">
                <label>Name</label>
                <input type="text" class="js-signup-input" placeholder="John Doe" />
              </div>
              <div class="accountformfield">
                <label>Email</label>
                <input type="email" class="js-signup-input" placeholder="example@example.com" />
              </div>
              <div class="accountformfield">
                <label>BirthDate</label>
                <input
                  type="text"
                  class="js-signup-input"
                  placeholder="ex) 90년도 12월 12일생 -> 19901212"
                />
              </div>
              <div class="accountformfield">
                <label>Gender</label>
                <select class="cdropshere" id="js-signup-input">
                  <option>Select</option>
                  <option value=1>Male</option>
                  <option value=0>Female</option>
                </select>
              </div>
              <div class="terms">
                By creating an account you agree to our
                <a href="#" title="">Terms and Conditions</a> and our
                <a href="#" title="">Privacy Policy</a>
              </div>
              <button type="submit" id="js-signup-btn">Sign Up</button>
            </div>
            <div class="extraconnect">
              <span>Or Connect With Social Networks</span>
              <div class="social">
                <a class="facebook" href="#" title=""
                  ><i class="fa fa-facebook"></i
                ></a>
                <a class="twitter" href="#" title=""
                  ><i class="fa fa-twitter"></i
                ></a>
                <a class="googleplus" href="#" title=""
                  ><i class="fa fa-google"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
    return main;
  }
  makeAdminHeader(user_img_mini, user_id, notification) {
    let header = ` 
    <div class="page-loading">
    <img src="images/loader.gif" alt="" />
    <span>Skip Loader</span>
  </div>
    <div class="responsiveheader">
  <div class="rheader">
    <span><img src="images/ricon.png" alt="" /></span>
    <div class="logo">
      <a href="#" title=""
        ><img src="/images/hiddenc_logo.png" alt=""
      /></a>
    </div>
  </div>
  <div class="rnaver">
    <span class="closeresmenu"><i>x</i>Close</span>
    <ul>
      <li>
        <a href="#" title="">Home</a>
      </li>
      <li class="accountbtn">
        <a href="#" title="">Search</a>
      </li>
      <li>
        <a href="#" title="">User</a>
      </li>
    </ul>
  </div>
</div>
<!-- Responsive header -->

<header class="s4 dark">
  <div class="container fluid">
    <div class="logo">
      <a href="#" title=""
        ><img src="/images/hiddenc_logo.png" alt=""
      /></a>
    </div>
    <div class="userdropsec">
      <span
        ><img src="${user_img_mini}" alt="" /><span
          >${user_id}</span
        ></span
      >
    </div>
    <a href="#" title="" class="bellicon"
      ><i class="fa fa-bell-o"></i><strong>${notification}</strong></a
    >
    <nav>
      <ul class="js-user-header-menu">
        <li>
          <a href="#" title="">Home</a>
        </li>
        <li class="accountbtn" style="float: left">
          <a href="#" title="">Search</a>
        </li>
        <li>
          <a href="#" title="">User</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
`;
    return header;
  }

  makeMainCaffaineList(
    user_id1,
    user_img1,
    user_id2,
    user_img2,
    user_id3,
    user_img3,
    user_id4,
    user_img4,
    user_id5,
    user_img5,
    user_id6,
    user_img6,
    user_id7,
    user_img7,
    user_id8,
    user_img8,
    user_id9,
    user_img9,
    user_id10,
    user_img10,
    user_id11,
    user_img11,
    user_id12,
    user_img12
  ) {
    let caffaine = ` <section class="main-section">
    <div class="block less-bottom">
      <div class="container fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading">
              <h2>This Week's Caffeine Ranking</h2>
              <span>이번주 카페인 랭킹 TOP 12</span>
            </div>
            <!-- Heading -->
            <ul class="citieslists">
              <li>
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img1}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id1}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img2}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id2}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img3}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id3}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img4}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id4}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
              </li>
              <li>
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img5}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id5}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img6}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id6}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img7}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id7}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img8}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id8}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
              </li>
              <li>
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img9}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id9}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img10}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id10}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img11}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id11}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
                <div class="cities">
                  <a href="#" title=""
                    ><img src="${user_img12}" alt=""
                  /></a>
                  <div class="cities-title">
                    <h3><a href="#" title="">${user_id12}</a></h3>
                    <span></span>
                  </div>
                </div>
                <!-- Cities -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return caffaine;
  }

  makeMainCafeList(
    cafe_name1,
    cafe_rate1,
    cafe_rate_count1,
    cafe_location1,
    cafe_name2,
    cafe_rate2,
    cafe_rate_count2,
    cafe_location2,
    cafe_name3,
    cafe_rate3,
    cafe_rate_count3,
    cafe_location3
  ) {
    let list = ` <section>
    <div class="block">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading">
              <h2>This Week's New Hidden Cafes</h2>
              <span>이번주 새로 등록된 카페입니다.</span>
            </div>
            <div class="carouselplaces">
              <ul id="carouselsec">
                <li>
                  <div class="places">
                    <div class="placethumb">
                      <img src="http://placehold.it/360x220" alt="" />
                      <div class="placeoptions">
                        <span class="pull-left">
                          <i class="flaticon-eye"></i> Preview
                        </span>
                        <span class="pull-right">
                          <i class="flaticon-heart"></i> Save
                        </span>
                      </div>
                    </div>
                    <div class="placeinfos">
                      <h3><a href="#" title="">${cafe_name1}</a></h3>

                      <ul class="listmetas">
                        <li>
                          <span class="rated">${cafe_rate1}</span
                          >${cafe_rate_count1}
                        </li>
                      </ul>
                    </div>
                    <div class="placedetails">
                      <span class="pull-left"
                        ><i class="flaticon-pin"></i>${cafe_location1}</span
                      >
                    </div>
                  </div>
                  <!-- Places -->
                </li>
                <li>
                  <div class="places">
                    <div class="placethumb">
                      <img src="http://placehold.it/360x220" alt="" />
                      <div class="placeoptions">
                        <span class="pull-left">
                          <i class="flaticon-eye"></i> Preview
                        </span>
                        <span class="pull-right">
                          <i class="flaticon-heart"></i> Save
                        </span>
                      </div>
                    </div>
                    <div class="placeinfos">
                      <h3><a href="#" title="">${cafe_name2}</a></h3>

                      <ul class="listmetas">
                        <li>
                          <span class="rated">${cafe_rate2}</span
                          >${cafe_rate_count2}
                        </li>
                      </ul>
                    </div>
                    <div class="placedetails">
                      <span class="pull-left"
                        ><i class="flaticon-pin"></i>${cafe_location2}</span
                      >
                    </div>
                  </div>
                  <!-- Places -->
                </li>
                <li>
                  <div class="places">
                    <div class="placethumb">
                      <img src="http://placehold.it/360x220" alt="" />
                      <div class="placeoptions">
                        <span class="pull-left">
                          <i class="flaticon-eye"></i> Preview
                        </span>
                        <span class="pull-right">
                          <i class="flaticon-heart"></i> Save
                        </span>
                      </div>
                    </div>
                    <div class="placeinfos">
                      <h3><a href="#" title="">${cafe_name3}</a></h3>

                      <ul class="listmetas">
                        <li>
                          <span class="rated">${cafe_rate3}</span
                          >${cafe_rate_count3}
                        </li>
                      </ul>
                    </div>
                    <div class="placedetails">
                      <span class="pull-left"
                        ><i class="flaticon-pin"></i>${cafe_location3}</span
                      >
                    </div>
                  </div>
                  <!-- Places -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return list;
  }

  makeSearchPop() {
    let pop = `<div class="popupsec">
    <div class="popup">
      <div class="accounttabs search_pop_size">
        <span class="closepopup"><i>+</i></span>
        <div id="content">
          <div class="accountform pop_form" id="one">
            <div class="pop_title">
              <h5 class="search_title">어떤 카페를 찾으세요?</h5>
            </div>
            <div class="search_bar">
              <input type="text" placeholder="검색어를 입력하세요" />
              <div class="fieldbtn">
                <button type="search" class="search_button">SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return pop;
  }

  makeUserMenu(
    user_img_background,
    user_img_profile,
    user_id,
    status,
    user_caffeine,
    user_like,
    total_cafe,
    subscription,
    favorite
  ) {
    let menu = `        <div class="block remove-bottom double-gap-top">
    <div class="layer blackish">
        <div data-velocity="-.1" style="background: url(${user_img_background}) repeat scroll 50% 422.28px transparent;" class="no-parallax parallax scrolly-invisible"></div><!-- PARALLAX BACKGROUND IMAGE -->	
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="iamusersec">
                        <div class="iamuser">
                            <div class="userimg"><img src="${user_img_profile}" alt="" /></div>
                            <div class="userinfos">
                                <h3>${user_id}</h3>
                                <span>${status}</span>
                            </div>
                        </div>
                        <div class="iamuserstats">
                            <span><i class="fa fa-coffee" aria-hidden="true"></i>Caffeine ${user_caffeine}</span>
                            <span><i class="flaticon-avatar"></i>Subscriber ${user_like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="menubarsec">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
              <ul class="js-user-menu">
              <li><a href="#" title=""><i class="flaticon-credit-card"></i>Dashboard</a></li>
              <li><a href="#" title=""><i class="fa fa-map-pin" aria-hidden="true"></i>My Hidden Cafe(${total_cafe})</a></li>
              <li> <a href="#" title=""><i class="fa fa-users" aria-hidden="true"></i>My Subscription(${subscription}) </a></li>
              <li><a href="#" title=""><i class="fa fa-plus" aria-hidden="true"></i>Add New Hidden Cafe</a></li>
              <li><a href="#" title=""><i class="flaticon-heart"></i> Bookmark(${favorite})</a></li>
              <li> <a href="#" title=""><i class="fa fa-cog" aria-hidden="true"></i>Settings</a></li>
              </ul>
            </div>
        </div>
    </div>
</div>
</div>`;
    return menu;
  }

  makeDashboard(total_cafe, total_add, total_favorite) {
    let dash = `<section>
    <div class="block gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="dashboradsec">
                        <h3>Dashboard</h3>
                        <div class="dashbadgesec">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="dashbadge clr1">
                                        <a href="#" title="" class="dashnum"> <span><i>${total_cafe}</i></span> <strong>I   visited</strong></a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashbadge clr2">
                                        <a href="#" title="" class="dashnum"> <span><i>${total_add}</i></span> <>I added</  strong></a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="dashbadge clr3">
                                        <a href="#" title="" class="dashnum"> <span><i>${total_favorite}</i></span>   <strong>Total Bookmark</strong></a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>`;
    return dash;
  }

  makeListAndMap(search_count) {
    let list = `<section>
    <div class="block no-padding">
      <div class="container fluid">
        <div class="row">
          <div class="col-lg-12" style="display: flex;">
            <div class="ml-filterslide openall " style="position:static">
              <div class="mlfilter-sec">
                <div class="mfilterform forresponsive">
                  <div class="row">
                       <div class="col-lg-3">
                  <div class="mlfield drop">
                    <input type="text" placeholder="Price" />
                    <i class="fa fa-money"></i>
                    <div class="prices-dropsec">
                      <div class="prices-drop">
                        <p>What is the price range?</p>
                        <span><i>Prices</i>$</span><span><i>Prices</i>$$</span><span><i>Prices</i>$$$</span><span><i>Prices</i>$$$$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="mlfield">
                    <input type="text" placeholder="Near Me" />
                    <i class="fa fa-flag-o"></i>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="mlfield">
                    <input type="text" placeholder="Open Now" />
                    <i class="fa fa-clock-o"></i>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="mlfield">
                    <select class="selectbox">
                      <option>Sort By</option>
                      <option>By Date</option>
                      <option>By Location</option>
                      <option>Latest</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="mlfield s2">
                    <select class="selectbox">
                      <option>All Categories</option>
                      <option>원두 구입 가능</option>
                      <option>주문시, 원두선택가능</option>
                      <option>핸드드립 메뉴</option>
                      <option>지역별</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="customdropdown">
                    <span>More Filters <i class="fa fa-angle-down"></i></span>
                    <div class="customdrops">	
                      <div class="mltags">
                        <div class="row">
                          <div class="col-lg-6">
                            <p class="c-label"><input name="cb" id="1" type="checkbox"><label for="1">Smoking Allow</label></p>
                            <p class="c-label"><input name="cb" id="2" type="checkbox"><label for="2">Parking str</label></p>
                            <p class="c-label"><input name="cb" id="3" type="checkbox"><label for="3">Daily Specials</label></p>
                            <p class="c-label"><input name="cb" id="4" type="checkbox"><label for="4">Card Payment</label></p>
                          </div>
                          <div class="col-lg-6">
                            <p class="c-label"><input name="cb" id="5" type="checkbox"><label for="5">Wireless Inter</label></p>
                            <p class="c-label"><input name="cb" id="6" type="checkbox"><label for="6">Wheelchair</label></p>
                            <p class="c-label"><input name="cb" id="7" type="checkbox"><label for="7">Pet Friendly</label></p>
                            <p class="c-label"><input name="cb" id="8" type="checkbox"><label for="8">Smoking Allow</label></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="customdropdown">
                    <span>Distance Radius <i class="fa fa-angle-down"></i></span>
                    <div class="customdrops">
                      <div class="rangedrops">
                        <span>Radius around selected destination</span>
                        <div class="rslider">
                          <amino-slider class="slider" data-min="0" data-max="100" data-value="10"></amino-slider>
                        </div>
                        <a href="#" title="" class="btn1 pull-left">Disable</a>
                        <a href="#" title="" class="btn2 pull-right">Apply</a>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                </div>
                <div class="ml-listings allset">
                  <div class="ml-filterbar">
                    <h3><i class="flaticon-eye"></i>${search_count} Results Found</h3>
                    <ul>
                      <li class="doubleplaces active"><span><i class="fa fa-th-large"></i></span></li>
                      <li class="listingplaces"><span><i class="fa fa-th-list"></i></span></li>
                    </ul>
                  </div>
                  <div class="ml-placessec "> 
                    <div class="row js-user-myhiddencafe-list">
                    
                    //클래스 위치가 맞는지 모르겠다.
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="half_map_custom" style ="position: static;">
              <div id="js-map-half" class="map" style="height:100%">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return list;
  }

  makeHalfListItem(cafe_name, cafe_rate, cafe_rate_count, cafe_location) {
    let item = ` <div class="col-lg-6"> <!--여기서 부터 1개의 카페-->
    <div class="places s2">
      <div class="placethumb">
        <img src="http://placehold.it/360x220" alt="" />
        <div class="placeoptions">
          <span class="pull-left"> <i class="flaticon-eye"></i> Preview </span>
          <span class="pull-right"> <i class="flaticon-heart"></i> Save </span>
        </div>
      </div>
      <div class="boxplaces">
        <div class="placeinfos">
          <h3><a href="#" title="">${cafe_name}</a></h3>
          <ul class="listmetas">
            <li><span class="rated">${cafe_rate}</span>${cafe_rate_count}</li>
          </ul>
        </div>
        <div class="placedetails">
          <span class="pull-left"><i class="flaticon-pin"></i>${cafe_location}</span>
        </div>
      </div>
    </div>
  </div><!-- Places -->`;
    return item;
  }

  makeMySubscription(user_img_mini, user_id) {
    let subscription = ` <div class="block remove-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="userdropsec sub_profile">
            <span
              ><img
                src="${user_img_mini}"
                alt=""
              />${user_id}</span
            >
          </div>
          <div class="ml-placessec">
            <div class="row js-user-myhiddencafe-list">
   
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return subscription;
  }

  makeSubscriptionList(cafe_name, cafe_rate, cafe_rate_count, cafe_location) {
    let list = `  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="places">
      <div class="placethumb">
        <img src="http://placehold.it/360x220" alt="" />
        <div class="placeoptions">
          <span class="pull-left">
            <i class="flaticon-eye"></i> Preview
          </span>
          <span class="pull-right">
            <i class="flaticon-heart"></i> Save
          </span>
        </div>
      </div>
      <div class="boxplaces">
        <div class="placeinfos">
          <h3><a href="#" title="">${cafe_name}</a></h3>
          <ul class="listmetas">
            <li>
              <span class="rated">${cafe_rate}</span
              >${cafe_rate_count}
            </li>
          </ul>
        </div>
        <div class="placedetails">
          <span class="pull-left"
            ><i class="flaticon-pin"></i>${cafe_location}</span
          >
        </div>
      </div>
    </div>
  </div>`;
    return list;
  }

  makeAddCafe() {
    let add = `<section>
    <div class="block gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- PBox -->
            <div class="pbox">
              <div class="addlistingform">
                <div class="add_cafe_title">카페 추가하기</div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>카페 이름 *</span>
                      <input type="text" class="js-user-addcafe-input"/>
                    </div>
                    <div class="fieldformy">
                      <span
                        >카페 메뉴 (본인이 구매한 메뉴라도 적어주세요)</span
                      >
                      <input
                        placeholder="ex) 아메리카노 4000 , 라떼 4500"
                        type="text" class="js-user-addcafe-input"
                      />
                    </div>
                    <div class="fieldformy">
                      <span>카테고리</span>
                      <select class="cdropshere">
                        <option>select option</option>
                        <option>option1</option>
                        <option>option2</option>
                        <option>option3</option>
                        <option>option4</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fieldformy">
                      <span>카페 주소 *</span>
                      <input
                        placeholder="ex) Seoul, Jongno-gu, Gwancheol-dong, 5-8 카페 뎀셀브즈"
                        type="text" class="js-user-addcafe-input"
                      />
                    </div>
                    <div class="fieldformy">
                      <span>카페 SNS </span>
                      <input
                        placeholder="https://www.instagram.com/starbucks"
                        type="text" class="js-user-addcafe-input"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <a title="" class="uploadfile">
                      <img src="images/cloud.png" alt="" />
                      <span>이미지를 업로드 하려면 클릭해주세요.</span>
                      <input
                        type="file"
                        accept="img/*"
                        onChange="uploadImgPreview()"
                        id="js-upload" class="js-user-addcafe-img"
                      />
                    </a>
                    <div class="pbox">
                      <h3>Gallery</h3>
                      <div class="slistinggallery">
                        <div class="sgallery img_preview">
                          <div id="js-thumnail" style="display: flex"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="fieldbtn">
                  <button type="submit" class="js-submit" js-user-addcafe-btn>등록하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    return add;
  }

  makeProfile() {
    let profile = `    <section>
		<div class="block gray">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-10">
						<div class="dashboradsec">
							<h3>Profile</h3>
							<div class="profileimageaction">
								<div class="row">
									<div class="col-lg-5">
										<div class="changeimg">
											<h3>Change Profile Image</h3>
											<div class="uploadimage">
                        <div id="js-thumnail" style="display: flex" src=""></div>
												<a href="#" title="">Cancel</a>
											</div>
                        <div class="jstinput"><a href="#" title="" class="browsephoto">Browse</a> 
                          <input type="file" accept="img/*" onChange="uploadProfile()" id="js-upload-profile" /></div>
											<p>Max file size is 1MB, Minimum dimension: <br>270x210 And Suitable</p>
										</div>
									</div>
									<div class="col-lg-7">
										<div class="changeimg">
											<h3>Change Background</h3>
											<div class="uploadimage">
												<div id="js-back-img" style="display: flex" src=""></div>
												<a href="#" title="">Cancel</a>
											</div>
                        <div class="jstinput"><a href="#" title="" class="browsephoto">Browse</a>
                          <input type="file" accept="img/*" onChange="uploadBackground()" id="js-upload-back-img" /></div>
											<p>Max file size is 1MB, Minimum dimension: 1920x400 And Suitable  <br>files are .jpg & .png</p>
										</div>
									</div>
								</div>
							</div>
							<div class="pbox">
								<div class="addlistingform">
									<div class="row">
										<div class="col-lg-6">
											<div class="fieldformy">
												<span>status message</span>
												<input type="text" class="js-user-status-input">
											</div>
											
										</div>
										<div class="col-lg-6">
											<div class="fieldformy">
												<span>Email </span>
												<input type="text" class="js-user-status-input">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="formaction">
												<a href="#" title="" class="updatebtn" id="js-user-status-btn">Update</a>
												<a href="#" title="" class="cancelbtn">Cancel</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="pbox">
								<h3>Change Password</h3>
								<div class="addlistingform">
									<div class="row">
											<div class="col-lg-12">
												<div class="fieldformy">
													<span>Current Password</span>
													<input type="password" class="js-user-pwchange-input">
												</div>
												<div class="fieldformy">
													<span>New Password</span>
													<input type="password" class="js-user-pwchange-input">
												</div>
												<div class="fieldformy">
													<span>Confirm New Password</span>
													<input type="password" class="js-user-pwchange-input">
												</div>
											</div>
											<div class="col-lg-12">
												<div class="formaction">
													<a href="#" title="" class="updatebtn"  id="js-user-pwchange-btn">Update</a>
													<a href="#" title="" class="cancelbtn">Cancel</a>
												</div>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>`;
    return profile;
  }

  //리스트의 ul에클래스를 주고 컴포넌트에서 li를 추가
}