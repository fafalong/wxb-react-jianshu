import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

/* 容器 */
export const HeaderWrapper = styled.nav`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

/* 内容 */
export const HeaderContent = styled.div`
  position: relative;
  width: 1440px;
  height: 56px;
  margin: 0 auto;
`

/* Logo */
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

/* 菜单栏 */
export const Nav = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  height: 56px;
  margin: 0 auto;
`

/* 左栏 */
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`
export const NavItemLeft = styled.div`
  padding: 0 20px;
  color: #333;
  font-size: 18px;
  &.active {
    color: #ea6f5a;
  }
`

/* 右栏 */
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`
export const NavItemRight = styled.div`
  padding: 0 10px;
  color: #aaa;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

/* 搜索栏 */
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 48px;
  & i {
    cursor: pointer;
  }
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 7px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 200px;
  height: 38px;
  line-height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 4px;
  margin-left: 26px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 280px;
  }

  &.slide-enter {
    width: 200px;
    transition: all 0.4s ease-in-out;
  }
  &.slide-enter-active {
    width: 280px;
  }
  &.slide-exit {
    width: 280px;
    transition: all 0.4s ease-in-out;
  }
  &.slide-exit-active {
    width: 200px;
  }
`

/* 搜索记录框 */
export const SearchInfo = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;
  &.hidden {
    display: none;
  }
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  font-size: 13px;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  float: left;
  display: block;
  padding: 0 5px;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #787878;
  border-radius: 3px;
  border-color: #b4b4b4;

  :hover {
    box-shadow: 0 6px 6px #eee;
    transition: all 0.4s;
  }
`

/* 最右侧部分 */
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const Button = styled.div`
  padding: 0 24px;
  margin: 0 6px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
