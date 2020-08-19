<template>
  <div class="fixed-top">
    <!--Stripes-->
    <div class="stripes">
      <div class="stripe dark-blue-background"></div>
      <div class="stripe blue-background"></div>
      <div class="stripe light-blue-background"></div>
      <div class="stripe dark-pink-background"></div>
      <div class="stripe light-pink-background"></div>
    </div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      class="nav-diploma-color"
    >
      <div class="container">
        <b-navbar-brand v-scroll-to="'#body'" :to="{ name: 'index' }">
          <img src="~/assets/img/logo.png" width="150" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item :to="{ name: 'courses' }" class="pure-menu-link">
              Courses
            </b-nav-item>
          </b-navbar-nav> -->

          <div>
            <b-dropdown
              v-if="false"
              id="dropdown-left"
              href="/courses"
              text="Courses"
              class="m-md-2"
              variant="light"
            >
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba-in-healthcare-management' }
                }"
              >
                Executive MBA in Healthcare Management
              </b-dropdown-item>
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba-in-hospitality-and-tourism' }
                }"
              >
                Executive MBA in Hospitality and Tourism</b-dropdown-item
              >
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba-in-financial-management' }
                }"
              >
                Executive MBA in Financial Management
              </b-dropdown-item>
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba-in-entrepreneurship' }
                }"
              >
                Executive MBA in Entrepreneurship
              </b-dropdown-item>
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba-in-marketing' }
                }"
              >
                Executive MBA in Marketing
              </b-dropdown-item>
              <b-dropdown-item
                :to="{
                  name: 'courses-slug',
                  params: { slug: 'executive-mba' }
                }"
                >Executive MBA
              </b-dropdown-item>
            </b-dropdown>
          </div>

          <b-navbar-nav id="nav" class="ml-auto">
            <!-- <b-nav-form id="search">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->

            <b-button
              variant="primary"
              class="ml-3"
              right
            >
              Donate
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  methods: {
    applyURL(slug) {
      return `${process.env.applyURL}/${slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  margin: 0.5rem 0;
}

.navbar {
  border-bottom: 1px solid #ccc;
}

.navbar-brand {
  padding-top: 0;
}

.stripes {
  height: 0.5rem;
  z-index: 999;
  width: 100%;

  .stripe {
    float: left;
    height: 0.5rem;
    width: 20%;
  }
}
.dark-pink-background {
  background: #b93e73 !important;
}
.light-blue-background {
  background: #b5cbea !important;
}
.blue-background {
  background: #2464b0 !important;
}
.dark-blue-background {
  background: #153a59 !important;
}
.light-pink-background {
  background: #f0508a !important;
}

#search {
  margin-right: 0.5rem;
}
</style>
