import { Icon } from '@iconify/react';
import fireAlertIcon from '@iconify/icons-mdi/fire-alert';
import volcanoIcon from '@iconify/icons-maki/volcano';
import stormShowers from '@iconify/icons-wi/storm-showers';
import accumulationIce from '@iconify/icons-carbon/accumulation-ice';

const Header = ({ setActiveCategory, activeCategory }) => {
  const changeActiveCategory = i => {
    let newArr = [...activeCategory];
    newArr[i] = !activeCategory[i];
    setActiveCategory(newArr);
  };

  return (
    <header className="header">
      <h1 className="icons">
        <Icon icon={fireAlertIcon} onClick={() => changeActiveCategory(0)} />
        <Icon icon={volcanoIcon} onClick={() => changeActiveCategory(1)} />
        <Icon icon={stormShowers} onClick={() => changeActiveCategory(2)} />
        <Icon icon={accumulationIce} onClick={() => changeActiveCategory(3)} />
      </h1>
      <h1>Powered By NASA</h1>
    </header>
  );
};

export default Header;
