import React, { useCallback } from 'react'
import { BackToTop } from '../style'

function BackTop(props) {
  // useCallback提升性能
  const handleScrollTop = useCallback(() => {
    window.scroll(0, 0)
  }, [])

  return <BackToTop onClick={handleScrollTop}>回到顶部</BackToTop>
}

export default BackTop
