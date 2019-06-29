import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden; /* 触发BFC */
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;

  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      box-shadow: 6px 10px 14px #aaa;
      transition: all 0.5s;
    }
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;

  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 2px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 40px;

  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }

  :hover {
    box-shadow: 0 14px 10px #eee;
    transition: all 0.3s;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;

  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .desc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
  cursor: pointer;

  :hover {
    box-shadow: 0 10px 10px #eee;
    transition: all 0.3s;
  }
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`
