<template>
  <b-nav-item-dropdown text="Learna Platforms" no-caret right>
    <template slot="button-content"
      ><b-icon-grid3x3-gap></b-icon-grid3x3-gap
    ></template>
    <ul id="grid-menu">
      <li>
        <a
          href="https://www.diploma-msc.com/c"
          target="_blank"
          title="Postgraduate Diplomas and MSc Courses"
        >
          <div class="grid-menu-icon">
            <b-icon-pentagon-fill font-scale="2"></b-icon-pentagon-fill>
          </div>
          <div class="grid-menu-label">
            PgDip/MSc
          </div>
        </a>
      </li>
      <li>
        <a href="/#courses" title="MBA Courses">
          <div class="grid-menu-icon">
            <b-icon-bullseye font-scale="2"></b-icon-bullseye>
          </div>
          <div class="grid-menu-label">
            MBA
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.studyprn.com/c/exam-revision"
          target="_blank"
          title="SCE Exam Preperation"
        >
          <div class="grid-menu-icon">
            <b-icon-diamond-half font-scale="2"></b-icon-diamond-half>
          </div>
          <div class="grid-menu-label">
            SCE
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.studyprn.com/c/cpd-resources"
          target="_blank"
          title="CPD Courses"
        >
          <div class="grid-menu-icon">
            <b-icon-exclude font-scale="2"></b-icon-exclude>
          </div>
          <div class="grid-menu-label">
            CPD
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://my.learna.ac.uk/manage/index"
          target="_blank"
          title="Access Your Learna Account"
        >
          <div class="grid-menu-icon">
            <b-icon-person-fill font-scale="2"></b-icon-person-fill>
          </div>
          <div class="grid-menu-label">
            Account
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://course.diploma-msc.com/my/"
          target="_blank"
          title="Access the Learna VLE"
        >
          <div class="grid-menu-icon">
            <b-icon-layers-fill font-scale="2"></b-icon-layers-fill>
          </div>
          <div class="grid-menu-label">
            Moodle
          </div>
        </a>
      </li>
    </ul>
  </b-nav-item-dropdown>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#grid-menu {
  padding: 15px 15px 35px 15px;
  width: 330px;
  min-height: 200px;

  li {
    float: left;
    text-align: center;
    width: 33.3%;
    list-style: none;
    a {
      border-radius: 5px;
      display: block;
      padding: 10px;
      text-decoration: none;
      .grid-menu-icon {
        color: #b93e73;
        margin-bottom: 5px;
      }
      .grid-menu-label {
        color: #153a59;
        font-size: 13px;
      }
    }
    a:hover,
    a:focus {
      background: #e8f0fd;
      .grid-menu-icon {
        color: #153a59;
      }
    }
  }
  li:nth-child(-n + 3) {
    margin-bottom: 15px;
  }
}
</style>
