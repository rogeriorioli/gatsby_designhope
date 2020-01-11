import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import  * as S from './styles';

export default function Button({classRight}) {
  return (
        <S.anchorContainer className={classRight}>
              <AnchorLink href='#contato'>Solicite um Orçamento</AnchorLink>
        </S.anchorContainer> 

  );
}
