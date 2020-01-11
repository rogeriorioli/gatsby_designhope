import React from 'react';

import * as S from './styles.js';

export default function Title({title}) {
  return (
      <S.TitleSection>
          {title}
      </S.TitleSection>
  );
}
