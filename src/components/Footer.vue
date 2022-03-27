<template>
  <b-container tag="footer" fluid="md" id="footer" class="p-0 m-0">
    <b-row class="text-center">
      <b-col tag="h2" class="logo" md="4" lg="3">
        <span class="sr-only">AVID Fulfillment platform</span>
      </b-col>
      <b-col tag="section" class="info" md="8" lg="9">
        <div class="tit-area">
          <p class="h6 m-0" style="font-size:14px;font-weight:600;">(주) 아비드이앤에프</p>
          <b-button tag="a" variant="dark" class="btn-company" href="https://url.kr/m87lx6">
            회사소개서 보기 <b-icon icon="arrow-right" aria-hidden="true" class="ml-1"></b-icon>
          </b-button>
        </div>

        <address class="address">
          <span>대표자 : 정시완 사업자 등록번호: 137-86-53948</span>
          <span>서울특별시 중구 마장로 3, 맥스타일 8층</span>
          <span>통신판매업신고 : 제 2019-서울중구-1703호</span>
          <span class="privacy">개인정보보호책임자 : 정재훈 privacy-help@avidenf.co.kr</span>
        </address>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'FooTer',
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
    created() {
        console.log('');
    },
  components: {
    
  }
}
</script>


<style lang="scss" scoped>
  #footer {
 

      .logo {
        &:before {
          display: block;
          width: 106px;
          height: 48px;
          background: url('~@/assets/images/common/CI_AVID.svg') left center no-repeat;
          background-size: contain;
          content: "";
        }
      }
      .info {
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        .tit-area {
          display: flex;
          flex-direction: row;
          align-items: center;
          .btn-company {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 147px;
            height: 32px;
            margin-left: 24px;
            font-weight: 700;
            font-size: 12px;
            color: #fff;
            line-height: 1;
            background-color: #000;
            // &:after {
            //   display: block;
            //   width: 16px;
            //   height: 16px;
            //   margin-left: 4px;
            //   background: url('~@/assets/images/common/arrow-right.svg') center center no-repeat;
            //   content: "";
            // }
          }
        }
        .address {
          display:block;

          margin-top: 20px;
          span {
            display: block;
            text-align: left;
            font-size: 12px;
            line-height: 16px;
            font-weight: 600;
            padding: 0 4px 6px 0;
            &:last-of-type {
              padding-bottom: 0;
            }
          }
        }
      }
  }




  @media screen and (min-width: 769px) {
    #footer {



        .logo {
          &:before {
            width: 100%;
            height: 74px;
          }
        }

        .info {
          flex: 1 1 auto;
          width: calc(100% - 260px);
          margin-top: 0;
          .tit-area {
            .btn-company {
              margin-left: 16px;
            }
          }
          .address {
            margin-top: 20px;
            text-align: left;

            span:not(.privacy) {
              display: inline-block;
              vertical-align: top;
              margin-left:10px;
              &:first-child{margin-left:0;}
            }
          }
        }


    }
  }



</style>
