import React from 'react';

function Pattern() {
  return (
    <div
      className={
        'hidden md:inline-block absolute -mt-8 ml-10 group-hover:mt-[-2.60rem] w-3/4 group-hover:ml-16 !transition-all duration-50 ease-in-out'
      }
    >
      <img
        src={'/img/pattern-hover.png'}
        alt={'pattern'}
        className={'opacity-0 absolute !transition-all animate will-change'}
        id={'pattern-hover'}
      />
      <img
        src={'/img/pattern.png'}
        alt={'pattern'}
        id={'pattern'}
        className={'will-change'}
      />
    </div>
  );
}
function Avatar() {
  const changePattern = (action: string) => {
    const patternHover = document.getElementById(
      'pattern-hover',
    ) as HTMLDivElement;
    if (action === 'hover') {
      patternHover.className = 'opacity-1 absolute !transition-all animate';
    } else if (action === 'remove') {
      patternHover.className = 'opacity-0 absolute !transition-all animate';
    }
  };
  return (
    <div
      className={'relative group mx-2 md:mx-3 inline-block'}
      onMouseOver={() => changePattern('hover')}
      onMouseLeave={() => changePattern('remove')}
    >
      <Pattern />
      <img
        src={'/img/me.png'}
        className="h-10 md:h-16 w-10 md:w-16 max-w-min rounded-full md:group-hover:w-24 md:group-hover:h-24 !transition-all animate inline-block will-change"
        alt={'Picture of me'}
      />
    </div>
  );
}

export default Avatar;
