
import './App.css';

function App() {
  return (
    <div className="App">
       <header id="header" className="header">
        <div className="container">
          <div className="header__body">
              <a href="#" className="header__logo">
              {/* <img className="logo__img" src="./src/images/logoRetromagaz.svg" alt="Retromagaz"> */}
              </a>
          <div data-modal-target="menuIcon" className="menu__icon" id="menuIcon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__leftside">
            <div className="header__searchform">
              <div className="searchform__link">
                <input type="text" placeholder="Я шукаю" className="searchform__input"/>
                <button className="searchform__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4082 19.8155C12.4957 19.8151 14.5229 19.1163 16.1673 17.8304L21.3371 23L23 21.3372L17.8302 16.1676C19.1167 14.5232 19.816 12.4956 19.8165 10.4077C19.8165 5.22055 15.5957 1 10.4082 1C5.22077 1 1 5.22055 1 10.4077C1 15.5949 5.22077 19.8155 10.4082 19.8155ZM10.4082 3.35193C14.2997 3.35193 17.4644 6.51646 17.4644 10.4077C17.4644 14.299 14.2997 17.4635 10.4082 17.4635C6.51676 17.4635 3.35206 14.299 3.35206 10.4077C3.35206 6.51646 6.51676 3.35193 10.4082 3.35193Z" fill="#c4c4c4"></path>
                </svg>
                </button>
              </div>
            </div>
            <a href="#" className="cart__link">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 15.125H30.1803L28.4344 24.5H15.3525L14 15.125ZM14 15.125L13.6311 11.2442L9.5 9.5" stroke="white" stroke-width="2"></path>
                <circle cx="16.25" cy="29.75" r="1.5" fill="white"></circle>
                <circle cx="26.75" cy="29.75" r="1.5" fill="white"></circle>
              </svg>
            </a>
          </div>
        </div>
        <div className="header__menu" id="headerMenu">
          <nav className="menu__body">
            <ul className="menu__list">
              <div className="list__header">
                <a href="#" className="list__header-title">Retromagaz</a>
                <button className="close__btn">
                  &times;
                </button>
              </div>
              <div className="menu__block">
                <div className="list__goods">
                  <li className="goods__item"><a href="" className="goods__link">Playstation</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Xbox</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Nintendo</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Steam Deck</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Консолі Інше</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Іграшки</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Гаджети</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Смаколики</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Різне</a></li>
                  <li className="goods__item"><a href="" className="goods__link">Акції</a></li>
                </div>
              <hr className="solid"/>
              <div className="list__info">
                <li className="info__item"><a href="" className="info__link">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="10" r="7.5" stroke="#C4C4C4" stroke-width="3"></circle>
                    <path d="M29 31C29 23.8203 23.1797 18 16 18C8.8203 18 3 23.8203 3 31" stroke="#C4C4C4" stroke-width="3"></path>
                  </svg>
                  <p className="info__text">Особистий кабінет</p></a>
                </li>
                <li className="info__item"><a href="" className="info__link">
                  <svg className="side-menu__cart-icon" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 7.125H22.1803L20.4344 16.5H7.35246L6 7.125ZM6 7.125L5.63115 3.24419L1.5 1.5" stroke="#C4C4C4" stroke-width="2"></path>
                  <circle cx="8.25" cy="21.75" r="1.5" fill="#C4C4C4"></circle>
                  <circle cx="18.75" cy="21.75" r="1.5" fill="#C4C4C4"></circle>
                  <circle className="circle" cx="22" cy="4" r="4" fill="#F31A5A"></circle>
                  </svg>
                    Кошик
                  </a></li>
                <li className="info__item"><a href="" className="info__link">
                  <svg className="side-menu__favorite-icon" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2441 12.5228C20.0333 14.2776 18.0597 16.1967 14.9541 18.9043L12.0152 21.0873L9.2152 18.9123C6.09961 16.1965 4.08069 14.2729 2.82681 12.5097C1.61491 10.8056 1.125 9.25962 1.125 7.25136C1.125 4.22419 3.48529 1.875 6.6 1.875C8.31001 1.875 10.039 2.676 11.1466 3.96539L12 4.95886L12.8534 3.96539C13.961 2.676 15.69 1.875 17.4 1.875C20.5147 1.875 22.875 4.22419 22.875 7.25136C22.875 9.27631 22.4154 10.8252 21.2441 12.5228Z" stroke="#C4C4C4" stroke-width="2.25" stroke-linecap="round"></path>
                  <circle className="circle" cx="22" cy="4" r="4" fill="#F31A5A"></circle>
                  </svg>
                    Обране    k
                  </a></li>
                </div>
                <hr className="solid"/>
                <div className="list__work">
                  <li className="work__item"><a href="" className="work__link">Про магазин</a></li>
                  <li className="work__item"><a href="" className="work__link">Вакансії</a></li>
                  <li className="work__item"><a href="" className="work__link">Оплата та доставка</a></li>
                  <li className="work__item"><a href="" className="work__link">Гарантія та повернення</a></li>
                  <li className="work__item"><a href="" className="work__link">Купуємо</a></li>
                  <li className="work__item"><a href="" className="work__link">Прокат</a></li>
                  <li className="work__item"><a href="" className="work__link">Контакти</a></li>
                </div>
                <hr className="solid"/>
                <div className="list__media">
                  <p className="media__title">Соціальні мережі</p>
                  <div className="media__block">
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/retromagaz/" className="instagram-link" aria-label="Instagram">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29 6.125C29 5.27865 28.6989 4.54622 28.0967 3.92773C27.4945 3.30924 26.7539 3 25.875 3H7.125C6.27865 3 5.54622 3.30924 4.92773 3.92773C4.30924 4.54622 4 5.27865 4 6.125V9.25H9.56641C11.4544 7.16667 13.7656 6.125 16.5 6.125C19.2344 6.125 21.5456 7.16667 23.4336 9.25H29V6.125ZM10.25 15.5C10.25 17.2253 10.8604 18.6982 12.0811 19.9189C13.3018 21.1396 14.7747 21.75 16.5 21.75C18.2253 21.75 19.6982 21.1396 20.9189 19.9189C22.1396 18.6982 22.75 17.2253 22.75 15.5C22.75 13.7747 22.1396 12.3018 20.9189 11.0811C19.6982 9.86035 18.2253 9.25 16.5 9.25C14.7747 9.25 13.3018 9.86035 12.0811 11.0811C10.8604 12.3018 10.25 13.7747 10.25 15.5ZM29 12.375H25.2891C25.6797 13.4492 25.875 14.4909 25.875 15.5C25.875 18.1042 24.9635 20.3177 23.1406 22.1406C21.3177 23.9635 19.1042 24.875 16.5 24.875C13.8958 24.875 11.6823 23.9635 9.85938 22.1406C8.03646 20.3177 7.125 18.1042 7.125 15.5C7.125 14.4909 7.32031 13.4492 7.71094 12.375H4V24.875C4 25.7539 4.30111 26.4945 4.90332 27.0967C5.50553 27.6989 6.24609 28 7.125 28H25.875C26.7539 28 27.4945 27.6989 28.0967 27.0967C28.6989 26.4945 29 25.7539 29 24.875V12.375Z" fill="white"></path>
                      </svg>
                  </a>
                  <a target="_blank" rel="noopener" href="https://www.tiktok.com/@retromagaz?" className="tiktok-link" aria-label="Contact tiktok">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1754 3H16.8347V20.029C16.8347 22.058 15.1653 23.7247 13.0877 23.7247C11.0101 23.7247 9.34064 22.058 9.34064 20.029C9.34064 18.0363 10.973 16.4058 12.9764 16.3333V12.058C8.56155 12.1304 5 15.6449 5 20.029C5 24.4493 8.63575 28 13.1248 28C17.6138 28 21.2496 24.4131 21.2496 20.029V11.2971C22.882 12.4565 24.8853 13.1449 27 13.1812V8.9058C23.7353 8.7971 21.1754 6.1884 21.1754 3Z" fill="white"></path>
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener" href="https://www.facebook.com/retromagaz" className="facebook-link" aria-label="Contact facebook">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9974 7.34627H19.285C18.845 7.34627 18.3562 7.96481 18.3562 8.78678V11.6513H23L22.2976 15.7364H18.3562V28H13.9749V15.7364H10V11.6513H13.9749V9.24862C13.9749 5.8013 16.2131 3 19.285 3H22.9974V7.34627Z" fill="white"></path>
                    </svg>
                  </a>
                  </div>
                  <p className="media__title">Графік роботи</p>
                  <span className="media__info">10:00 - 21:00 без вихідних</span>
                  <p className="media__title">Телефони</p>
                  <a href="" className="media__phone">0 800 33 41 45</a>
                  <p className="media__title">Магазини</p>
                  <p className="media__info">Київ, вул. Івана Франка, 42</p>
                  <p className="media__info">Київ, проспект Степана Бандери, 16/6</p>
                  <p className="media__info">Львів, вул. Ігоря Білозіра, 8 (колишня Герцена,8)</p>
                  <p className="media__info">Одеса, вул. Мала Арнаутська, 44</p>
                </div>
                <hr className="solid"/>
                <div className="list__language">
                  <a href="" className="language__link link__active">УКР</a>
                  <a href="" className="language__link">РУС</a>
                </div>
              </div>
                <hr className="solid"/>
              </ul>
            </nav> 
          </div>
        </div>  
        <div id="overlay"></div>
      </header>
    </div>
  );
}

export default App;
