import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      result: [],
      curr: '0'
    }
  }

  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    //如果是从API上取数据
    const fetch = openSdk.fetch('icbu.data.product.grouplist', { bizId: gdc.bizId, strategyName: 'groupProductSelect', selectGroupProducts: mds.items });
    fetch.then((data) => {
      this.setState({
        hasData: true,
        result: data.success ? data.result : []
      })
    })
  }
  handleClick = (i) => {
    this.setState({
      curr: i
    })
  }
  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? 1 : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }

    var ullist = [];
    var babylist = [];
    var list_num = this.state.result.length ? this.state.result.length : (mds.moduleData.items ? mds.moduleData.items.length : 4);



    var demo_tit = [{ "title": "Category name" }, { "title": "Category name" }, { "title": "Category name" }, { "title": "Category name" }];
    var lmtitles = mds.moduleData.lmtitles ? mds.moduleData.lmtitles : demo_tit;
    for (var i = 0; i < list_num; i++) {
      ullist.push(<li onMouseEnter={this.handleClick.bind(null, i)}>
        <div className={i == this.state.curr ? 'show active' : 'hide active'} style={{ background: mds.moduleData.fl_actbg, borderColor: mds.moduleData.fl_actbc, color: mds.moduleData.fl_actc }}>{lmtitles[i] && lmtitles[i].title ? lmtitles[i].title : demo_tit[i % 4].title}</div>
        <div className={i == this.state.curr ? 'hide default' : 'show default'} style={{ background: mds.moduleData.fl_devbg, borderColor: mds.moduleData.fl_devbc, color: mds.moduleData.fl_devc }}>{lmtitles[i] && lmtitles[i].title ? lmtitles[i].title : demo_tit[i % 4].title}</div>
      </li>);
    }
    /*默认产品按钮图片*/
    var gd_def_btn = 'https://img.alicdn.com/imgextra/i2/800803731/O1CN01pZMZOx1dQqFNBv3nd_!!800803731.jpg';
    /*默认产品切换按钮图片,没有时填默认图片*/
    var gd_act_btn = 'https://img.alicdn.com/imgextra/i2/800803731/O1CN01pZMZOx1dQqFNBv3nd_!!800803731.jpg';
    /*默认顶部海报,没有时让值等于'' */
    var gd_margin = Number.parseInt(mds.moduleData.gd_margin || 20);
    var gd_border = Number.parseInt(mds.moduleData.gd_border || 0);
    var gd_padding = Number.parseInt(mds.moduleData.gd_padding || 10);
    var gd_width = Number.parseInt((1200 - 3 * gd_margin) / 4);
    var gd_imgWdith = Number.parseInt((1200 - 3 * gd_margin) / 4) - gd_border * 2 - gd_padding * 2;
    var demoList = [];
    for (var i = 0; i < 8; i++) {
      demoList.push(<a className='item_box' style={{ background: mds.moduleData.gd_bg, borderColor: mds.moduleData.gd_bc, marginRight: gd_margin == 0 ? -1 : gd_margin, marginTop: gd_margin == 0 ? -1 : (i < 4 ? 0 : gd_margin), width: gd_width, borderWidth: gd_border, padding: gd_padding, paddingBottom: 0 }}>
        <div className='item_bg' style={{ width: gd_imgWdith, height: gd_imgWdith }}><img src={'https://img.alicdn.com/imgextra/i4/800803731/O1CN01dAqjnk1dQqOYR9cng_!!800803731.jpg'} /></div>
        <div className='item_info'>
          {(mds.moduleData.tit_dis == null || mds.moduleData.tit_dis) && <div className={'item_title line' + (mds.moduleData.name_h)} style={{ color: mds.moduleData.gd_titc }}>Edit Display Product Name Price</div>}
          {(mds.moduleData.price_dis == null || mds.moduleData.price_dis) && <div className='item_price' style={{ color: mds.moduleData.gd_pricec }}>US $90.0 - 168.0 <span>/ Acres</span></div>}
          {(mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) && <div className='item_btn'>
            <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
            <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
          </div>}
          {(mds.moduleData.order_dis == null || mds.moduleData.order_dis) && <div className={'min_order'} style={{ color: mds.moduleData.gd_orderc }}>100 Pieces<span> (Min.Order) </span></div>}
        </div>
      </a>
      )
    }

    if (this.state.result[0]) {
      for (var i = 0; i < list_num; i++) {
        var gd_zdy = eval('mds.moduleData.gd_zdy' + i) ? eval('mds.moduleData.gd_zdy' + i) : [{ "img": "", "title": "" }];
        babylist.push(<div className={'product_box cf'}><div className='main'>
          {this.state.result[i].products.map((item, index) => (
            <a target={target} href={item.productUrl} className='item_box' style={{ background: mds.moduleData.gd_bg, borderColor: mds.moduleData.gd_bc, marginRight: gd_margin == 0 ? -1 : gd_margin, marginTop: gd_margin == 0 ? -1 : (index < 4 ? 0 : gd_margin), width: gd_width, borderWidth: gd_border, padding: gd_padding, paddingBottom: 0 }}>
              <div className='item_bg' style={{ width: gd_imgWdith, height: gd_imgWdith }}><img src={gd_zdy[index] && gd_zdy[index].img ? gd_zdy[index].img : item.productImage.url.x640} /></div>
              <div className='item_info'>
                {(mds.moduleData.tit_dis == null || mds.moduleData.tit_dis) && <div className={'item_title line' + (mds.moduleData.name_h)} style={{ color: mds.moduleData.gd_titc }}>{gd_zdy[index] && gd_zdy[index].title ? gd_zdy[index].title : item.productSubject}</div>}
                {(mds.moduleData.price_dis == null || mds.moduleData.price_dis) && <div className='item_price' style={{ color: mds.moduleData.gd_pricec }}>{item.fobPriceWithoutUnit}<span> {item.fobUnit ? ('/' + item.fobUnit) : ''}</span></div>}
                {(mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) && <div className='item_btn' >
                  <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
                  <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
                </div>}
                {(mds.moduleData.order_dis == null || mds.moduleData.order_dis) && <div className={'min_order'} style={{ color: mds.moduleData.gd_orderc }}>{item.moq}<span> (Min.Order) </span></div>}
              </div>
            </a>
          ))}
        </div></div>);
      }
    } else {
      for (var i = 0; i < list_num; i++) {
        babylist.push(<div className={'product_box cf'}><div className='main'>{demoList}</div></div>);
      }
    }

    return (
      <div className={'wm1920'} style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg || '#f5f5f5', paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {mds.moduleData.btitle && <div className='tit_box'>
          <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>
          <div className='title_icon'><img src={mds.moduleData.title_icon ? mds.moduleData.title_icon : 'https://img.alicdn.com/imgextra/i3/800803731/O1CN01VAUMbn1dQqFXILHWN_!!800803731.png'} /></div>
        </div>}
        <a className="banner"><img src='https://img.alicdn.com/imgextra/i4/800803731/O1CN01yGL5ar1dQqPMmOsc8_!!800803731.png' /></a>
        <div className={'b_box'} style={{ background: mds.moduleData.bg_proc }}>
          <div className={'wm_item'} >
            <ul className='listul cf'>{ullist}</ul>
            <div className='tab_item cf' style={{ width: 1200 * list_num, 'transform': 'translateX(' + 1200 * -this.state.curr + 'px)' }}>{babylist}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo;
