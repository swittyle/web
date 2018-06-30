/**
 * Created by dady on 2017/12/15.
 */

import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom"
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
import './index.less';
import menus from '../../../config/menus'
import { Affix} from 'antd';


class SiderMenu extends Component {

  constructor(props) {
    super(props);
  }

  getNavMenuItems(menus) {
    return (
      menus.map((item, i) =>
        <SubMenu
          key={item.key}
          title={
            <span>
            <Icon type={item.type} />
            <span>{item.content}</span>
          </span>
          }
          onTitleClick={()=>{
            this.props.history.push(`/${item.key}`);
          }}
        >
          {
            item.sub&&item.sub.map((item1, i) =>
              <Menu.Item key={item1.key}>
                <Link
                  to={'/'+item1.key}
                  onClick={
                    () => {
                      this.props.onCollapse(true);
                    }
                  }
                >
                  {/*<Icon type={item.type}/>*/}
                  <span>{item1.content}</span>
                </Link>
              </Menu.Item>
            )
          }
        </SubMenu>)

    )
  };

  render() {
    const {location} = this.props;

    return (
      <Affix>
      <Menu
        inlineIndent="40"
        className="aside-container menu-site"
        mode="inline"
        defaultSelectedKeys={['/wallet']}
        selectedKeys={[location.pathname]}
      >
        {this.getNavMenuItems(menus)}
      </Menu>
      </Affix>
    );
  }
}


export default withRouter(SiderMenu);
