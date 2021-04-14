import { React, ReactDOM, openSdk, Button, Slider } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auto: true
        }
    }
    componentWillMount() {
        const moduleData = this.props.moduleData;
        const { mds, gdc } = moduleData;
        const fetch = openSdk.fetch('icbu.data.common.minisite', { bizId: gdc.bizId, productIds: [], strategyName: 'manuallySelect' });
    }

    render() {
        const { moduleTitle } = this.state;
        const { mds } = this.props.moduleData;
        var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
        var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
        var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
        if (mds.moduleData.target === true) {
            var target = "_blank";
        } else {
            var target = "_self";
        }
        /* 模块背景图片设置*/
        var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? '1' : '2';
        var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';

        var demo = [{ "img": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01rp8dyw1dQqIlC3RBU_!!800803731.jpg", "tit": "Hot Sallings" },
        { "img": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01gxRqXx1dQqIefNO2q_!!800803731.jpg", "tit": "Hot Sallings" },
        { "img": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01lINJEQ1dQqIZ391yh_!!800803731.jpg", "tit": "New products" }];
        var infos = mds.moduleData.infos ? mds.moduleData.infos : demo;
        var list_info = [];
        for (var i = 0; i < infos.length; i++) {
            list_info.push(<div className="list_box" style={{ marginTop: i < 3 ? 0 : 37 }}>
                <a target={target} href={infos[i].url} className={'list'} style={{ backgroundColor: mds.moduleData.ct_bg }}>
                    <div className='img'><img className='trans03s' src={infos[i].img ? infos[i].img : demo[i % 3].img} /></div>
                    <div className='tit' style={{ color: mds.moduleData.ct_titc }}>{infos[i].tit ? infos[i].tit : demo[i % 3].tit}</div>
                </a>
            </div>);
        }
        return (<div className='wm1920' style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
            {mds.moduleData.btitle && <div className='tit_box'>
                <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>
                <div className='stitle' style={{ color: mds.moduleData.mk_titc2 }}>{mds.moduleData.stitle}</div>
            </div>}
            <div className={'b_box'}>
                <div className='us_list'>{list_info}</div>
            </div>
        </div>
        );
    }
};

export default IntlIcbuSmodDemo;
