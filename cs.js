import { React, ReactDOM, openSdk, Button, Slider } from '@alife/icbu-mod-lib';
import './index.scss';
class IntlIcbuSmodDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      result: [],
      auto: true
    }
  }
  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    const html = '';
    //如果是从API上取数据 
    const fetch = openSdk.fetch('icbu.data.product.list', { bizId: gdc.bizId, strategyName: mds.strategyName, countNumber: mds.countNumber, products: mds.products });
    fetch.then((data) => {
      this.setState({
        hasData: true,
        result: data.success ? data.result : []
      })
    })
  }
  autoplay = (a) => {
    this.setState({
      auto: a
    })
  }

  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    const { auto } = this.state;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    var gd_zdy = mds.moduleData.gd_zdy ? mds.moduleData.gd_zdy : [{ "img": "", "title": "" }];

    /*默认背景图片，没有时让值等于''*/
    var mk_bgImg = 'https://img.alicdn.com/imgextra/i3/800803731/O1CN01ZJ3KXc1dQqPC8b5v1_!!800803731.jpg';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? '1' : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    var zbabylist = [];
    if (this.state.result.length != 0) {
      {
        this.state.result.map((item, index) => (
          zbabylist.push(
            <a target={target} className={'item_box list'} href={item.productUrl}>
              <div className='item_bg' style={{ borderColor: mds.moduleData.gd_bc }}>
                <img src={gd_zdy[index] && gd_zdy[index].img ? gd_zdy[index].img : item.productImage.url.x640} />
              </div>
              <div className='item_info'>
                <div className={'btit'} style={{ color: mds.moduleData.btitle_c }}>{mds.moduleData.btitle ? mds.moduleData.btitle : 'SMART SOCKET COMFORTABLE LIFE'}</div>
                <div className='item_tit' style={{ color: mds.moduleData.gd_titlec }}>{gd_zdy[index] && gd_zdy[index].proTit ? gd_zdy[index].proTit : item.productSubject}</div>
                <div className='item_line' style={{ background: mds.moduleData.gd_linec }}></div>
                <div className='item_price' style={{ color: mds.moduleData.gd_pricec }}>{item.fobPriceWithoutUnit}<span style={{ color: mds.moduleData.gd_pricec }}>{item.fobUnit ? ('/' + item.fobUnit) : ''}</span></div>
                <div className={'min_order'} style={{ color: mds.moduleData.gd_orderc }}>{item.moq}<span> (Min.Order) </span></div>
                <div className='item_btn' >
                  <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
                  <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
                </div>
              </div>
            </a>)
        ))
      }
    } else {
      for (var i = 0; i < 2; i++) {
        zbabylist.push(<a target={target} className={'item_box list'}>
          <div className='item_bg'>
            <img src={'https://img.alicdn.com/imgextra/i4/800803731/O1CN01dAqjnk1dQqOYR9cng_!!800803731.jpg'} />
          </div>
          <div className='item_info'>
            <div className={'btit'}>DRY BATTERY BEAUTIFUL LIFE</div>
            <div className='item_tit'>Edit Display Product Name Price Edit Display Product Name Price Edit Display Product </div>
            <div className='item_line'></div>
            <div className='item_price'>US $ 30 -80 <span> /Piece</span></div>
            <div className={'min_order'}>100 Pieces<span> (Min.Order) </span></div>
            <div className='item_btn' >
              <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
              <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
            </div>
          </div>
        </a>);
      }
    }
    return (
      <div className={'wm1920'} style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : mk_bgImg) : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingBottom: paddingBottom, paddingTop: paddingTop }}>
        <div className='product_box'>
          {this.state.result.length != 0 && <Slider slidesToShow={1} autoplaySpeed={5000} autoplay={true} dots={false} className={'b_img'}>
            {zbabylist}
          </Slider>}
        </div>

        {this.state.hasData && this.state.result.length == 0 && <div className={'product_box'}>
          <Slider className={'b_img'} autoplay={true} autoplaySpeed={6000} dots={false} slidesToShow={1}>
            {zbabylist}
          </Slider>
        </div>}
      </div>
    );
  }
};
export default IntlIcbuSmodDemo;