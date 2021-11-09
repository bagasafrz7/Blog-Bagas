<template>
  <div class="header-nav">
    <b-container>
      <b-row>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div class="logo">
            <!-- <div v-if="$colorMode.preference === 'light'">
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
              </nuxt-link>
            </div>
            <div v-else-if="$colorMode.preference === 'dark'">
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-white.png" alt="" srcset="" />
              </nuxt-link>
            </div> -->
            <div v-if="!darkMode">
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-white.png" alt="" srcset="" />
              </nuxt-link>
            </div>
            <div v-else>
              <nuxt-link to="/">
                <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
              </nuxt-link>
            </div>
            <!-- <div v-if="show">
              <div v-if="showEng">
                <nuxt-link to="/">
                  <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
                </nuxt-link>
              </div>
              <div v-if="showIdn">
                <nuxt-link to="/id">
                  <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
                </nuxt-link>
              </div>
            </div> -->
            <!-- <div v-if="showMoon">
              <div v-if="showEng">
                <nuxt-link to="/">
                  <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
                </nuxt-link>
              </div>
              <div v-if="showIdn">
                <nuxt-link to="/id">
                  <img src="@/assets/img/logo/ba3-black.png" alt="" srcset="" />
                </nuxt-link>
              </div>
            </div>
            <div v-if="showSun">
              <div v-if="showEng">
                <nuxt-link to="/">
                  <img src="@/assets/img/logo/ba3-white.png" alt="" srcset="" />
                </nuxt-link>
              </div>
              <div v-if="showIdn">
                <nuxt-link to="/id">
                  <img src="@/assets/img/logo/ba3-white.png" alt="" srcset="" />
                </nuxt-link>
              </div>
            </div> -->
          </div>
          <ul v-if="showEng" class="links">
            <li>
              <nuxt-link to="/about">
                {{ $t('link_about') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog"> {{ $t('link_blog') }} </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/projects"> {{ $t('link_project') }} </nuxt-link>
            </li>
            <li>
              <div class="dropdown">
                <p v-if="$i18n.locale !== 'en'" class="dropbtn">
                  <img src="@/assets/img/id.png" alt="" srcset="" />
                </p>
                <p v-if="$i18n.locale !== 'id'" class="dropbtn">
                  <img src="@/assets/img/en.png" alt="" srcset="" />
                </p>
                <!-- <button class="dropbtn">Dropdown</button> -->
                <div class="dropdown-content">
                  <li style="display: flex; flex-direction: row">
                    <img
                      src="@/assets/img/id.png"
                      alt=""
                      srcset=""
                      style="width: 50%; object-fit: none"
                    />
                    <!-- <nuxt-link :to="switchLocalePath('id')" style="color: #000">
                      IDN</nuxt-link
                    > -->
                    <p style="color: #000" @click="languageIDN">IDN</p>
                  </li>
                  <li style="display: flex; flex-direction: row">
                    <img
                      src="@/assets/img/en.png"
                      alt=""
                      srcset=""
                      style="width: 50%; object-fit: none"
                    />
                    <!-- <nuxt-link :to="switchLocalePath('en')" style="color: #000">
                      ENG
                    </nuxt-link> -->
                    <p style="color: #000" @click="languageENG">ENG</p>
                  </li>
                </div>
              </div>
            </li>
            <!-- <li>
              <button v-if="!darkMode" @click="toggleSwitch">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.9998"
                    cy="11.9998"
                    r="5.75375"
                    fill="currentColor"
                  />
                  <g>
                    <circle
                      cx="3.08982"
                      cy="6.85502"
                      r="1.71143"
                      transform="rotate(-60 3.08982 6.85502)"
                      fill="currentColor"
                    />
                    <circle
                      cx="3.0903"
                      cy="17.1436"
                      r="1.71143"
                      transform="rotate(-120 3.0903 17.1436)"
                      fill="currentColor"
                    />
                    <circle
                      cx="12"
                      cy="22.2881"
                      r="1.71143"
                      fill="currentColor"
                    />
                    <circle
                      cx="20.9101"
                      cy="17.1436"
                      r="1.71143"
                      transform="rotate(-60 20.9101 17.1436)"
                      fill="currentColor"
                    />
                    <circle
                      cx="20.9101"
                      cy="6.8555"
                      r="1.71143"
                      transform="rotate(-120 20.9101 6.8555)"
                      fill="currentColor"
                    />
                    <circle
                      cx="12"
                      cy="1.71143"
                      r="1.71143"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              <button v-else @click="toggleSwitch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </li> -->
            <!-- <li>
              <div>
                <a @click="toggle">
                  <div v-if="showSun">
                    <fa :icon="['far', 'sun']" class="sun" />
                  </div>
                  <div v-if="showMoon">
                    <fa :icon="['far', 'moon']" class="moon" />
                  </div>
                </a>
              </div>
            </li> -->
          </ul>
          <ul v-if="showIdn" class="links">
            <li>
              <nuxt-link to="/id/about">
                {{ $t('link_about') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/id/blog"> {{ $t('link_blog') }} </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/id/projects">
                {{ $t('link_project') }}
              </nuxt-link>
            </li>
            <li>
              <div class="dropdown">
                <p v-if="$i18n.locale !== 'en'" class="dropbtn">
                  <img src="@/assets/img/id.png" alt="" srcset="" />
                </p>
                <p v-if="$i18n.locale !== 'id'" class="dropbtn">
                  <img src="@/assets/img/en.png" alt="" srcset="" />
                </p>
                <!-- <button class="dropbtn">Dropdown</button> -->
                <div class="dropdown-content">
                  <li style="display: flex; flex-direction: row">
                    <img
                      src="@/assets/img/id.png"
                      alt=""
                      srcset=""
                      style="width: 50%; object-fit: none"
                    />
                    <!-- <nuxt-link :to="switchLocalePath('id')" style="color: #000">
                      IDN</nuxt-link
                    > -->
                    <p style="color: #000" @click="languageIDN">IDN</p>
                  </li>
                  <li style="display: flex; flex-direction: row">
                    <img
                      src="@/assets/img/en.png"
                      alt=""
                      srcset=""
                      style="width: 50%; object-fit: none"
                    />
                    <!-- <nuxt-link :to="switchLocalePath('en')" style="color: #000">
                      ENG
                    </nuxt-link> -->
                    <p style="color: #000" @click="languageENG">ENG</p>
                  </li>
                </div>
              </div>
            </li>
            <li>
              <button v-if="!darkMode" @click="toggleSwitch">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.9998"
                    cy="11.9998"
                    r="5.75375"
                    fill="currentColor"
                  />
                  <g>
                    <circle
                      cx="3.08982"
                      cy="6.85502"
                      r="1.71143"
                      transform="rotate(-60 3.08982 6.85502)"
                      fill="currentColor"
                    />
                    <circle
                      cx="3.0903"
                      cy="17.1436"
                      r="1.71143"
                      transform="rotate(-120 3.0903 17.1436)"
                      fill="currentColor"
                    />
                    <circle
                      cx="12"
                      cy="22.2881"
                      r="1.71143"
                      fill="currentColor"
                    />
                    <circle
                      cx="20.9101"
                      cy="17.1436"
                      r="1.71143"
                      transform="rotate(-60 20.9101 17.1436)"
                      fill="currentColor"
                    />
                    <circle
                      cx="20.9101"
                      cy="6.8555"
                      r="1.71143"
                      transform="rotate(-120 20.9101 6.8555)"
                      fill="currentColor"
                    />
                    <circle
                      cx="12"
                      cy="1.71143"
                      r="1.71143"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              <button v-else @click="toggleSwitch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </li>
            <!-- <li>
              <div>
                <a @click="toggle">
                  <div v-if="showSun">
                    <fa :icon="['far', 'sun']" class="sun" />
                  </div>
                  <div v-if="showMoon">
                    <fa :icon="['far', 'moon']" class="moon" />
                  </div>
                </a>
              </div>
            </li> -->
          </ul>
          <div>
            <label for="active" class="menu-burger" @click="ClickMenu">
              <fa :icon="['fas', 'bars']" class="building" />
            </label>
          </div>
          <!-- <h1>
              <p @click="ClickMenu">Clck Me</p>
            </h1> -->

          <div v-if="showMenu" id="menu" class="popover">
            <div class="content">
              <div class="lang-close">
                <div>
                  <div style="display: flex; flex-direction: row">
                    <div style="margin: 25px 10px">
                      <nuxt-link
                        v-if="$i18n.locale !== 'en'"
                        :to="switchLocalePath('en')"
                      >
                        <img
                          src="@/assets/img/en.png"
                          alt=""
                          srcset=""
                          @click="languageENG"
                        />
                      </nuxt-link>

                      <nuxt-link
                        v-if="$i18n.locale !== 'id'"
                        :to="switchLocalePath('id')"
                      >
                        <img
                          src="@/assets/img/id.png"
                          alt=""
                          srcset=""
                          @click="languageIDN"
                        />
                      </nuxt-link>
                    </div>
                    <!-- <div style="margin: 5px 10px">
                          <a @click="toggle">
                            <div v-if="showSun">
                              <fa :icon="['far', 'sun']" class="sun" />
                            </div>
                            <div v-if="showMoon">
                              <fa :icon="['far', 'moon']" class="moon" />
                            </div>
                          </a>
                        </div> -->
                  </div>
                </div>
                <div>
                  <button v-if="!darkMode" @click="toggleSwitch">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.9998"
                        cy="11.9998"
                        r="5.75375"
                        fill="currentColor"
                      />
                      <g>
                        <circle
                          cx="3.08982"
                          cy="6.85502"
                          r="1.71143"
                          transform="rotate(-60 3.08982 6.85502)"
                          fill="currentColor"
                        />
                        <circle
                          cx="3.0903"
                          cy="17.1436"
                          r="1.71143"
                          transform="rotate(-120 3.0903 17.1436)"
                          fill="currentColor"
                        />
                        <circle
                          cx="12"
                          cy="22.2881"
                          r="1.71143"
                          fill="currentColor"
                        />
                        <circle
                          cx="20.9101"
                          cy="17.1436"
                          r="1.71143"
                          transform="rotate(-60 20.9101 17.1436)"
                          fill="currentColor"
                        />
                        <circle
                          cx="20.9101"
                          cy="6.8555"
                          r="1.71143"
                          transform="rotate(-120 20.9101 6.8555)"
                          fill="currentColor"
                        />
                        <circle
                          cx="12"
                          cy="1.71143"
                          r="1.71143"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <button v-else @click="toggleSwitch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <a class="close" @click="CloseMenu"></a>
              <div class="nav">
                <ul v-if="showEng" class="nav_list">
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/about">
                        {{ $t('link_about') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/blog">
                        {{ $t('link_blog') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/projects">
                        {{ $t('link_project') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <!-- <div class="nav_list_item">
                    <li>
                      <div style="display: flex; flex-direction: row">
                        <div style="margin: 25px 10px">
                          <nuxt-link
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                          >
                            <img
                              src="@/assets/img/en.png"
                              alt=""
                              srcset=""
                              @click="languageENG"
                            />
                          </nuxt-link>

                          <nuxt-link
                            v-if="$i18n.locale !== 'id'"
                            :to="switchLocalePath('id')"
                          >
                            <img
                              src="@/assets/img/id.png"
                              alt=""
                              srcset=""
                              @click="languageIDN"
                            />
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                  </div> -->
                  <!-- <div class="nav_list_item">
                    <li>
                      <button v-if="!darkMode" @click="toggleSwitch">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="11.9998"
                            cy="11.9998"
                            r="5.75375"
                            fill="currentColor"
                          />
                          <g>
                            <circle
                              cx="3.08982"
                              cy="6.85502"
                              r="1.71143"
                              transform="rotate(-60 3.08982 6.85502)"
                              fill="currentColor"
                            />
                            <circle
                              cx="3.0903"
                              cy="17.1436"
                              r="1.71143"
                              transform="rotate(-120 3.0903 17.1436)"
                              fill="currentColor"
                            />
                            <circle
                              cx="12"
                              cy="22.2881"
                              r="1.71143"
                              fill="currentColor"
                            />
                            <circle
                              cx="20.9101"
                              cy="17.1436"
                              r="1.71143"
                              transform="rotate(-60 20.9101 17.1436)"
                              fill="currentColor"
                            />
                            <circle
                              cx="20.9101"
                              cy="6.8555"
                              r="1.71143"
                              transform="rotate(-120 20.9101 6.8555)"
                              fill="currentColor"
                            />
                            <circle
                              cx="12"
                              cy="1.71143"
                              r="1.71143"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                      <button v-else @click="toggleSwitch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 50 50"
                        >
                          <path
                            d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </li>
                  </div> -->
                </ul>
                <ul v-if="showIdn" class="nav_list">
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/id/about">
                        {{ $t('link_about') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/id/blog">
                        {{ $t('link_blog') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <div class="nav_list_item">
                    <li @click="CloseMenu">
                      <nuxt-link to="/id/projects">
                        {{ $t('link_project') }}
                      </nuxt-link>
                    </li>
                  </div>
                  <!-- <div class="nav_list_item">
                    <li>
                      <div style="display: flex; flex-direction: row">
                        <div style="margin: 25px 10px">
                          <nuxt-link
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                          >
                            <img
                              src="@/assets/img/en.png"
                              alt=""
                              srcset=""
                              @click="languageENG"
                            />
                          </nuxt-link>

                          <nuxt-link
                            v-if="$i18n.locale !== 'id'"
                            :to="switchLocalePath('id')"
                          >
                            <img
                              src="@/assets/img/id.png"
                              alt=""
                              srcset=""
                              @click="languageIDN"
                            />
                          </nuxt-link>
                        </div>
                      </div>
                    </li>
                  </div> -->
                  <!-- <div class="nav_list_item">
                    <li>
                      <button v-if="!darkMode" @click="toggleSwitch">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="11.9998"
                            cy="11.9998"
                            r="5.75375"
                            fill="currentColor"
                          />
                          <g>
                            <circle
                              cx="3.08982"
                              cy="6.85502"
                              r="1.71143"
                              transform="rotate(-60 3.08982 6.85502)"
                              fill="currentColor"
                            />
                            <circle
                              cx="3.0903"
                              cy="17.1436"
                              r="1.71143"
                              transform="rotate(-120 3.0903 17.1436)"
                              fill="currentColor"
                            />
                            <circle
                              cx="12"
                              cy="22.2881"
                              r="1.71143"
                              fill="currentColor"
                            />
                            <circle
                              cx="20.9101"
                              cy="17.1436"
                              r="1.71143"
                              transform="rotate(-60 20.9101 17.1436)"
                              fill="currentColor"
                            />
                            <circle
                              cx="20.9101"
                              cy="6.8555"
                              r="1.71143"
                              transform="rotate(-120 20.9101 6.8555)"
                              fill="currentColor"
                            />
                            <circle
                              cx="12"
                              cy="1.71143"
                              r="1.71143"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                      <button v-else @click="toggleSwitch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 50 50"
                        >
                          <path
                            d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </li>
                  </div> -->
                </ul>
              </div>
            </div>
          </div>
          <!-- v-b-toggle.sidebar-no-header -->
          <!-- <label class="icon-burger">
            <input id="active" type="checkbox" />

            <label for="active" class="menu-btn">
              <fa :icon="['fas', 'bars']" class="building" />
            </label>
            <div v-if="showEng" class="wrapper">
              <ul>
                <li>
                  <a @click="linkAbout">{{ $t('link_about') }}</a>
                </li>
                <li>
                  <a @click="linkHasil">{{ $t('link_blog') }}</a>
                </li>
                <li>
                  <a @click="linkProject">{{ $t('link_project') }}</a>
                </li>
                <div style="display: flex; flex-direction: row">
                  <li style="margin: 5px 0">
                    <div>
                      <a @click="toggle">
                        <div v-if="showSun">
                          <fa :icon="['far', 'sun']" class="sun" />
                        </div>
                        <div v-if="showMoon">
                          <fa :icon="['far', 'moon']" class="moon" />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li style="margin: 15px 0">
                    <b-dropdown size="lg" variant="link">
                      <template
                        #button-content
                        style="display: flex; flex-direction: row"
                      >
                        <span v-if="$i18n.locale !== 'en'" class="dropbtn"
                          ><img src="@/assets/img/id.png" alt="" srcset=""
                        /></span>
                        <span v-if="$i18n.locale !== 'id'" class="dropbtn"
                          ><img src="@/assets/img/en.png" alt="" srcset=""
                        /></span>
                      </template>
                      <b-dropdown-item>
                        <img
                          src="@/assets/img/id.png"
                          alt=""
                          srcset=""
                          style="width: 50%; object-fit: none"
                        />
                        <p style="color: #000" @click="languageIDN">IDN</p>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <img
                          src="@/assets/img/en.png"
                          alt=""
                          srcset=""
                          style="width: 50%; object-fit: none"
                        />
                        <p style="color: #000" @click="languageENG">ENG</p>
                      </b-dropdown-item>
                    </b-dropdown>
                  </li>
                </div>
              </ul>
            </div>
            <div v-if="showIdn" class="wrapper">
              <ul>
                <li>
                  <a @click="linkAboutID">{{ $t('link_about') }}</a>
                </li>
                <li>
                  <a @click="linkHasilID">{{ $t('link_blog') }}</a>
                </li>
                <li>
                  <a @click="linkProjectID">{{ $t('link_project') }}</a>
                </li>
                <div style="display: flex; flex-direction: row">
                  <li style="margin: 5px 0">
                    <div>
                      <a @click="toggle">
                        <div v-if="showSun">
                          <fa :icon="['far', 'sun']" class="sun" />
                        </div>
                        <div v-if="showMoon">
                          <fa :icon="['far', 'moon']" class="moon" />
                        </div>
                      </a>
                    </div>
                  </li>
                  <li style="margin: 15px 0">
                    <b-dropdown size="lg" variant="link">
                      <template #button-content>
                        <div style="display: flex; flex-direction: row">
                          <span v-if="$i18n.locale !== 'en'" class="dropbtn"
                            ><img src="@/assets/img/id.png" alt="" srcset=""
                          /></span>
                          <span v-if="$i18n.locale !== 'id'" class="dropbtn"
                            ><img src="@/assets/img/en.png" alt="" srcset=""
                          /></span>
                        </div>
                      </template>
                      <b-dropdown-item>
                        <img
                          src="@/assets/img/id.png"
                          alt=""
                          srcset=""
                          style="width: 50%; object-fit: none"
                        />
                        <p style="color: #000" @click="languageIDN">IDN</p>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <img
                          src="@/assets/img/en.png"
                          alt=""
                          srcset=""
                          style="width: 50%; object-fit: none"
                        />
                        <p style="color: #000" @click="languageENG">ENG</p>
                      </b-dropdown-item>
                    </b-dropdown>
                  </li>
                </div>
              </ul>
            </div>
          </label> -->
        </nav>
      </b-row>
    </b-container>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      shadow
      right
      class="custom-sidebar"
      bg-variant="light"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <nav>
            <div class="logo">
              <nuxt-link to="/">
                <h2>B</h2>
              </nuxt-link>
            </div>
            <ul class="sidebar-links">
              <li>
                <nuxt-link to="/about" @click="hide"> Tentang Saya </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blog" @click="hide"> Hasil Tulisan </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/projects" @click="hide"> Projects </nuxt-link>
              </li>
              <li @click="hide">
                <!-- <ColorModePicker /> -->
                <div>
                  <a @click="toggle">
                    <div v-if="showSun">
                      <fa :icon="['far', 'sun']" class="sun" />
                    </div>
                    <div v-if="showMoon">
                      <fa :icon="['far', 'moon']" class="moon" />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
// import ColorModePicker from '@/components/ColorModePicker'
export default {
  components: {
    // ColorModePicker
  },
  data() {
    return {
      show: true,
      showSun: true,
      showMoon: false,
      showEng: true,
      showIdn: false,
      showMenu: false,
      darkMode: true
    }
  },
  mounted() {
    // this.show = false
    this.$colorMode.preference =
      this.$colorMode.value === 'light' ? 'dark' : 'light'
    const dataTheme = localStorage.getItem('nuxt-color-mode')
    if (dataTheme === 'light') {
      this.show = true
      this.showSun = true
      this.showMoon = false
      // console.log(dataTheme)
    } else if (dataTheme === 'dark') {
      this.show = false
      this.showSun = true
      this.showMoon = false
      // console.log(dataTheme)
    } else if (dataTheme === '') {
      this.showSun = true
      this.showMoon = false
    }
  },
  methods: {
    toggleSwitch() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
      this.darkMode = !this.darkMode
    },
    ClickMenu() {
      this.showMenu = true
    },
    CloseMenu() {
      this.showMenu = false
    },
    linkAbout() {
      this.$router.push('/about')
    },
    linkProject() {
      this.$router.push('/projects')
    },
    linkHasil() {
      this.$router.push('/blog')
    },
    inkAboutID() {
      this.$router.push('/id/about')
    },
    linkProjectID() {
      this.$router.push('/id/projects')
    },
    linkHasilID() {
      this.$router.push('/id/blog')
    },
    languageENG() {
      localStorage.setItem('local', 'en')
      const language = localStorage.getItem('local')
      this.$i18n.locale = language
      // console.log(language)
      this.showIdn = false
      this.showEng = true
    },
    languageIDN() {
      localStorage.setItem('local', 'id')
      const language = localStorage.getItem('local')
      this.$i18n.locale = language
      // console.log(language)
      this.showIdn = true
      this.showEng = false
    },
    toggle() {
      this.showMenu = false
      this.show = false
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      const dataTheme = localStorage.getItem('nuxt-color-mode')
      if (dataTheme === 'light') {
        this.showSun = true
        this.showMoon = false
        // console.log(dataTheme)
      } else if (dataTheme === 'dark') {
        this.showSun = false
        this.showMoon = false
        this.show = false
        // console.log(dataTheme)
      } else if (dataTheme === '') {
        this.showSun = true
        this.showMoon = false
      }
      // console.log(dataTheme)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.dropbtn {
  background-color: transparent;
  color: var(--bg-secondary);
  border: none;
  display: flex;
  flex-direction: row;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  /* min-width: 160px; */
  /* width: 100%; */
  width: 100px;
  left: -40px;
  right: 30px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: #000;
}
.dropdown-content a {
  color: #000;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  font-size: 14px;
}
/* .dropdown-content a:hover {
  background-color: #ddd;
} */
.dropdown:hover .dropdown-content {
  display: block;
  padding: 10px 5px;
}
.dropdown:hover .dropbtn {
  background-color: transparent;
}
.sun {
  /* color: var(--color-icon-header); */
  color: #f7b633;
  font-size: 20px;
}
.moon {
  /* color: var(--color-icon-header); */
  color: #f7b633;
  font-size: 20px;
}
nav {
  width: 100%;
  padding: 20px 0;
}
/* NAV */
nav .logo {
  float: left;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  /* color: var(--color-logo); */
}

nav .logo img {
  width: 50px;
  height: 50px;
}

.logo h2 {
  background: var(--bg-logo);
  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px 0;
  border-radius: 50px;
  transition: ease-in-out 0.5s;
  color: var(--color-logo);
}

.logo h2:hover {
  background: #f7b633;
  color: #fff;
}

nav .logo a {
  color: #f7b633;
  text-decoration: none;
}

nav .logo a:hover {
  text-decoration: none;
}

.nuxt-link-exact-active.nuxt-link-active {
  color: #f7b633;
}
nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em 0;
  font-size: 16px;
  font-weight: bold;
  color: var(--bg-secondary);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}
nav .links a:hover {
  color: #fddea1;
  transition: all 0.3s ease-in-out;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 4%;
  display: none;
  /* background: #f7b633; */
}
nav .menu-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 4%;
  display: none;
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

h1 a {
  font-size: 80px;
  color: #f7b633;
  text-decoration: none;
  text-transform: uppercase;
}

.popover {
  box-shadow: 0px 6px 8px rgb(19 19 19 / 70%);
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #191919;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem; */
}

.popover:target {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #191919;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
}

.popover .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--bg1);
  -webkit-animation: 1s grow-data-v-81a679f4 ease forwards;
  animation: 1s grow-data-v-81a679f4 ease forwards;
  text-align: center;
}

.nav_list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav_list a {
  text-decoration: none;
  font-size: 32px;
  /* color: #fff; */
  color: var(--color-nav);

  font-family: 'Poppins', sans-serif;
}

.nav_list_item {
  height: 100%;
  overflow: hidden;
}
.nav_list_item a {
  font-family: 'Poppins', sans-serif;
}

.nav_list li {
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(200px);
  opacity: 0;
  animation: 0.5s slideUp ease forwards 0.5s;
  position: relative;
}

.nav_list li::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 0px;
  left: 0;
  bottom: 10px;
  background: #f7b633;
  transition: all 0.5s ease;
}

.nav_list li:hover:before {
  width: 100%;
}

.popover p {
  padding: 50px;
  opacity: 0;
  animation: 1s fadeIn ease forwards 1s;
}

.popover .close::after {
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f7b633;
  color: #fff;
  content: 'X';
  cursor: pointer;
  opacity: 0;
  animation: 1s fadeIn ease forwards 0.5s;
}

.lang-close {
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: var(--color-nav);
  cursor: pointer;
  opacity: 0;
  margin: 5px 15px;
  animation: 1s fadeIn ease forwards 0.5s;
}

@keyframes grow {
  100% {
    height: 100%;
    width: 100%;
  }
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media screen and (max-width: 1024px) {
  nav .links a {
    font-size: 16px;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  nav .logo {
    float: none;
    width: 30%;
    justify-content: center;
  }
  .header-nav {
    padding: 15px 0;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }
  ul,
  li {
    list-style: none;
  }
  ul li a {
    /* color: #000; */
  }
  nav .links a {
    font-size: 20px;
    color: #fff;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
    margin: 10px;
  }
  nav .menu-burger {
    display: block;
    margin: 10px;
    position: absolute;
    z-index: 9;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 55px;
    border-radius: 50%;
    font-size: 20px;
    /* color: #fff; */
    color: var(--color-nav);
    cursor: pointer;
    background-color: var(--bg1);
    /* background: #000; */
    animation: 1s fadeIn ease forwards 0.5s;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper {
  background: #000;
  clip-path: circle(75%);
  z-index: 8;
}
.menu-btn {
  position: absolute;
  z-index: 9;
  right: 0px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 55px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: #000;
  transition: all 0.3s ease-in-out;
}
.wrapper ul {
  position: absolute;
  /* top: 50%;
  left: 50%; */
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  list-style: none;
}
.wrapper ul li {
  margin: 5px 0;
}
.wrapper ul li a {
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  /* padding: 5px 30px; */
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

input[type='checkbox'] {
  display: none;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title {
  font-size: 40px;
  font-weight: 700;
}
.content p {
  font-size: 35px;
  font-weight: 600;
}

@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@media screen and (max-width: 576px) {
  ul {
    margin: 10px 0;
  }
}

@media screen and (max-width: 768px) {
  nav .logo {
    width: 40%;
  }

  .hero-img h1 {
    width: 100%;
    font-size: 32px;
  }
}
</style>
