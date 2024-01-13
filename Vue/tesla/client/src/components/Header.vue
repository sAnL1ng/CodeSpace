<template>
    <div class="container">
      <div class="header">
        <!-- <div class="name">T E S L A</div> -->
        <router-link class="name" to="/home">T E S L A</router-link>
  
        <div class="middle">
          <router-link to="/models">Model S</router-link>
          <router-link to="/model3">Model 3</router-link>
          <router-link to="/modely">Model Y</router-link>
          <router-link to="/cybertruck">Cybertruck</router-link>
          <router-link to="/powerwall">Powerwall</router-link>
          <router-link to="/map">地图</router-link>
          <router-link to="/community">社区</router-link>
        </div>
  
        <div class="right">
          <router-link to="/onlionShop">在线商店</router-link>
          <router-link to="/account">账户</router-link>
          <div class="nav" @click="showNav">导航栏</div>
        </div>
      </div>
    </div>
    <div class="rightBar animate__animated animate__bounceInRight" v-if="isShow===true">
      <div class="left" @click="hideNav"></div>
      <div class="right">
        <div class="container">
          <div class="clear" @click="hideNav">
            <img src="../assets/images/qingchu.png" alt />
          </div>
          <div class="scanner">点击下方看车</div>
          <div class="modelS box">
            <router-link class="modelS box" to="./roadSter">Roadster</router-link>
          </div>
          <div class="modelS box">Model S</div>
          <div class="model3 box">Model 3</div>
          <div class="modelX box">Model X</div>
          <div class="modelY box">Model Y</div>
          <div class="cyberTruct box">Cybertruck</div>
        </div>
      </div>
    </div>
  </template>
    
  <script setup>
  import { ref } from "vue";
  import "animate.css";
  let isShow = ref(false);
  
  const showNav = () => {
    isShow.value = true;
  };
  const hideNav = () => {
    isShow.value = false;
  };
  </script>
    
    <style lang="less" scoped>
  .animate__bounceInRight {
    background: rgba(0, 0, 0, 0.01);
    backdrop-filter: blur(3px);
    animation-duration: 0.5s; /* don't forget to set a duration! */
  }
  * {
    color: #000;
  }
  a {
    text-decoration: none;
  }
  
  .router-link-active {
    text-decoration: none;
  }
  .container {
    position: absolute;
    top: 0;
    width: 95%;
    color: #000;
  }
  .header {
    display: flex;
    padding: 15px;
    width: 100%;
    justify-content: space-between;
  
    .name {
      font-size: 20px;
      font-weight: 540;
      margin-left: 2%;
    }
    .middle {
      display: flex;
      font-weight: 500;
      font-size: 13px;
      width: 50%;
      justify-content: space-between;
      line-height: 20px;
    }
    .right {
      display: flex;
      width: 20%;
      font-weight: 500;
      font-size: 13px;
      justify-content: space-between;
      line-height: 20px;
    }
  }
  .nav {
    cursor: pointer;
  }
  .rightBar {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    z-index: 100;
    .left {
      flex: 4;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(3px);
    }
    .right {
      flex: 1;
      background: #fff;
      .clear {
        position: fixed;
        right: 20px;
        top: 30px;
        width: 15px;
        height: 15px;
        img {
          color: #393c41;
          width: 100%;
          height: 100%;
        }
      }
      .container {
        box-sizing: border-box;
        padding-top: 50px;
        padding-left: 40px;
        .scanner {
          margin-top: 30px;
          padding-bottom: 40px;
          font-weight: 800;
          font-size: 20px;
        }
        .box {
          padding-bottom: 20px;
        }
      }
    }
  }
  </style>