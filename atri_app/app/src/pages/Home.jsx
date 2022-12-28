import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex1Cb, useFlex14Cb, useFlex5Cb, useFlex10Cb, useFlex154Cb, useFlex12Cb, useFlex9Cb, useMenu1Cb, useFlex6Cb, useFlex16Cb, useFlex15Cb, useFlex243Cb, useFlex160Cb, useFlex77Cb, useFlex62Cb, useFlex60Cb, useFlex51Cb, useFlex47Cb, useFlex52Cb, useFlex48Cb, useFlex53Cb, useFlex49Cb, useFlex54Cb, useFlex50Cb, useFlex250Cb, useFlex251Cb, useFlex252Cb, useFlex259Cb, useFlex258Cb, useFlex256Cb, useFlex86Cb, useFlex85Cb, useFlex84Cb, useFlex241Cb, useFlex195Cb, useFlex193Cb, useFlex183Cb, useFlex242Cb, useFlex229Cb, useFlex227Cb, useFlex228Cb, useFlex232Cb, useFlex230Cb, useFlex231Cb, useFlex271Cb, useFlex269Cb, useFlex270Cb, useFlex223Cb, useFlex219Cb, useFlex207Cb, useFlex198Cb, useFlex199Cb, useFlex208Cb, useFlex226Cb, useFlex224Cb, useFlex225Cb, useDiv1Cb, useFlex788Cb, useFlex789Cb, useFlex830Cb, useFlex831Cb, useDiv40Cb, useFlex871Cb, useFlex872Cb, useFlex874cardCb, useFlex873dataCb, useFlex875Cb, useFlex876detCb, useFlex877Cb, useFlex884cardCb, useFlex883Cb, useFlex881Cb, useFlex880Cb, useFlex879Cb, useFlex890cardCb, useFlex889Cb, useFlex887Cb, useFlex886Cb, useFlex885Cb, useFlex909Cb, useFlex906cardCb, useFlex900Cb, useFlex897Cb, useFlex894Cb, useFlex891Cb, useFlex907cardCb, useFlex902Cb, useFlex898Cb, useFlex895Cb, useFlex892Cb, useFlex908cardCb, useFlex905Cb, useFlex899Cb, useFlex896Cb, useFlex893Cb, useImage2Cb, useTextBox2Cb, useTextBox10Cb, useTextBox11Cb, useTextBox155Cb, useTextBox156Cb, useImage37Cb, useButton2Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox14Cb, useTextBox16Cb, useTextBox160Cb, useImage66Cb, useImage38Cb, useTextBox63Cb, useTextBox54Cb, useTextBox55Cb, useTextBox64Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useTextBox65Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox66Cb, useTextBox62Cb, useImage76Cb, useImage77Cb, useImage78Cb, useImage79Cb, useTextBox230Cb, useImage85Cb, useImage84Cb, useTextBox229Cb, useTextBox95Cb, useTextBox93Cb, useTextBox94Cb, useImage63Cb, useTextBox185Cb, useTextBox186Cb, useImage60Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useImage59Cb, useImage96Cb, useTextBox237Cb, useTextBox238Cb, useTextBox239Cb, useInput4Cb, useButton16Cb, useTextBox192Cb, useTextBox201Cb, useTextBox202Cb, useTextBox209Cb, useTextBox210Cb, useImage56Cb, useTextBox508Cb, useImage339Cb, useImage340Cb, useImage341Cb, useImage342Cb, useImage343Cb, useImage356Cb, useImage344Cb, useImage345Cb, useImage346Cb, useImage347Cb, useImage348Cb, useImage354Cb, useImage349Cb, useImage350Cb, useImage351Cb, useImage352Cb, useImage353Cb, useImage358Cb, useFlex878layCb, useTextBox634Cb, useImage383Cb, useImage382Cb, useTextBox636Cb, useTextBox637Cb, useFlex882layCb, useTextBox640Cb, useImage385Cb, useImage384Cb, useTextBox638Cb, useTextBox639Cb, useFlex888layCb, useTextBox643Cb, useImage387Cb, useImage386Cb, useTextBox641Cb, useTextBox642Cb, useFlex901layCb, useTextBox650Cb, useImage391Cb, useImage388Cb, useTextBox644Cb, useTextBox645Cb, useFlex903layCb, useTextBox651Cb, useImage392Cb, useImage389Cb, useTextBox646Cb, useTextBox647Cb, useFlex904layCb, useTextBox652Cb, useImage393Cb, useImage390Cb, useTextBox648Cb, useTextBox649Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex243Props = useStore((state)=>state["Home"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["Home"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex250Props = useStore((state)=>state["Home"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Home"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex256Props = useStore((state)=>state["Home"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Home"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex241Props = useStore((state)=>state["Home"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Home"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex195Props = useStore((state)=>state["Home"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Home"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex193Props = useStore((state)=>state["Home"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Home"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex242Props = useStore((state)=>state["Home"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["Home"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex229Props = useStore((state)=>state["Home"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["Home"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex227Props = useStore((state)=>state["Home"]["Flex227"]);
const Flex227IoProps = useIoStore((state)=>state["Home"]["Flex227"]);
const Flex227Cb = useFlex227Cb()
const Flex228Props = useStore((state)=>state["Home"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["Home"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex232Props = useStore((state)=>state["Home"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["Home"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex230Props = useStore((state)=>state["Home"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["Home"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex231Props = useStore((state)=>state["Home"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["Home"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex271Props = useStore((state)=>state["Home"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["Home"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex269Props = useStore((state)=>state["Home"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["Home"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex270Props = useStore((state)=>state["Home"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["Home"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex223Props = useStore((state)=>state["Home"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Home"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex219Props = useStore((state)=>state["Home"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["Home"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex207Props = useStore((state)=>state["Home"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["Home"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex198Props = useStore((state)=>state["Home"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Home"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex199Props = useStore((state)=>state["Home"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["Home"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex208Props = useStore((state)=>state["Home"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["Home"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex226Props = useStore((state)=>state["Home"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["Home"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Flex224Props = useStore((state)=>state["Home"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Home"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["Home"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["Home"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex788Props = useStore((state)=>state["Home"]["Flex788"]);
const Flex788IoProps = useIoStore((state)=>state["Home"]["Flex788"]);
const Flex788Cb = useFlex788Cb()
const Flex789Props = useStore((state)=>state["Home"]["Flex789"]);
const Flex789IoProps = useIoStore((state)=>state["Home"]["Flex789"]);
const Flex789Cb = useFlex789Cb()
const Flex830Props = useStore((state)=>state["Home"]["Flex830"]);
const Flex830IoProps = useIoStore((state)=>state["Home"]["Flex830"]);
const Flex830Cb = useFlex830Cb()
const Flex831Props = useStore((state)=>state["Home"]["Flex831"]);
const Flex831IoProps = useIoStore((state)=>state["Home"]["Flex831"]);
const Flex831Cb = useFlex831Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Flex871Props = useStore((state)=>state["Home"]["Flex871"]);
const Flex871IoProps = useIoStore((state)=>state["Home"]["Flex871"]);
const Flex871Cb = useFlex871Cb()
const Flex872Props = useStore((state)=>state["Home"]["Flex872"]);
const Flex872IoProps = useIoStore((state)=>state["Home"]["Flex872"]);
const Flex872Cb = useFlex872Cb()
const Flex874cardProps = useStore((state)=>state["Home"]["Flex874card"]);
const Flex874cardIoProps = useIoStore((state)=>state["Home"]["Flex874card"]);
const Flex874cardCb = useFlex874cardCb()
const Flex873dataProps = useStore((state)=>state["Home"]["Flex873data"]);
const Flex873dataIoProps = useIoStore((state)=>state["Home"]["Flex873data"]);
const Flex873dataCb = useFlex873dataCb()
const Flex875Props = useStore((state)=>state["Home"]["Flex875"]);
const Flex875IoProps = useIoStore((state)=>state["Home"]["Flex875"]);
const Flex875Cb = useFlex875Cb()
const Flex876detProps = useStore((state)=>state["Home"]["Flex876det"]);
const Flex876detIoProps = useIoStore((state)=>state["Home"]["Flex876det"]);
const Flex876detCb = useFlex876detCb()
const Flex877Props = useStore((state)=>state["Home"]["Flex877"]);
const Flex877IoProps = useIoStore((state)=>state["Home"]["Flex877"]);
const Flex877Cb = useFlex877Cb()
const Flex884cardProps = useStore((state)=>state["Home"]["Flex884card"]);
const Flex884cardIoProps = useIoStore((state)=>state["Home"]["Flex884card"]);
const Flex884cardCb = useFlex884cardCb()
const Flex883Props = useStore((state)=>state["Home"]["Flex883"]);
const Flex883IoProps = useIoStore((state)=>state["Home"]["Flex883"]);
const Flex883Cb = useFlex883Cb()
const Flex881Props = useStore((state)=>state["Home"]["Flex881"]);
const Flex881IoProps = useIoStore((state)=>state["Home"]["Flex881"]);
const Flex881Cb = useFlex881Cb()
const Flex880Props = useStore((state)=>state["Home"]["Flex880"]);
const Flex880IoProps = useIoStore((state)=>state["Home"]["Flex880"]);
const Flex880Cb = useFlex880Cb()
const Flex879Props = useStore((state)=>state["Home"]["Flex879"]);
const Flex879IoProps = useIoStore((state)=>state["Home"]["Flex879"]);
const Flex879Cb = useFlex879Cb()
const Flex890cardProps = useStore((state)=>state["Home"]["Flex890card"]);
const Flex890cardIoProps = useIoStore((state)=>state["Home"]["Flex890card"]);
const Flex890cardCb = useFlex890cardCb()
const Flex889Props = useStore((state)=>state["Home"]["Flex889"]);
const Flex889IoProps = useIoStore((state)=>state["Home"]["Flex889"]);
const Flex889Cb = useFlex889Cb()
const Flex887Props = useStore((state)=>state["Home"]["Flex887"]);
const Flex887IoProps = useIoStore((state)=>state["Home"]["Flex887"]);
const Flex887Cb = useFlex887Cb()
const Flex886Props = useStore((state)=>state["Home"]["Flex886"]);
const Flex886IoProps = useIoStore((state)=>state["Home"]["Flex886"]);
const Flex886Cb = useFlex886Cb()
const Flex885Props = useStore((state)=>state["Home"]["Flex885"]);
const Flex885IoProps = useIoStore((state)=>state["Home"]["Flex885"]);
const Flex885Cb = useFlex885Cb()
const Flex909Props = useStore((state)=>state["Home"]["Flex909"]);
const Flex909IoProps = useIoStore((state)=>state["Home"]["Flex909"]);
const Flex909Cb = useFlex909Cb()
const Flex906cardProps = useStore((state)=>state["Home"]["Flex906card"]);
const Flex906cardIoProps = useIoStore((state)=>state["Home"]["Flex906card"]);
const Flex906cardCb = useFlex906cardCb()
const Flex900Props = useStore((state)=>state["Home"]["Flex900"]);
const Flex900IoProps = useIoStore((state)=>state["Home"]["Flex900"]);
const Flex900Cb = useFlex900Cb()
const Flex897Props = useStore((state)=>state["Home"]["Flex897"]);
const Flex897IoProps = useIoStore((state)=>state["Home"]["Flex897"]);
const Flex897Cb = useFlex897Cb()
const Flex894Props = useStore((state)=>state["Home"]["Flex894"]);
const Flex894IoProps = useIoStore((state)=>state["Home"]["Flex894"]);
const Flex894Cb = useFlex894Cb()
const Flex891Props = useStore((state)=>state["Home"]["Flex891"]);
const Flex891IoProps = useIoStore((state)=>state["Home"]["Flex891"]);
const Flex891Cb = useFlex891Cb()
const Flex907cardProps = useStore((state)=>state["Home"]["Flex907card"]);
const Flex907cardIoProps = useIoStore((state)=>state["Home"]["Flex907card"]);
const Flex907cardCb = useFlex907cardCb()
const Flex902Props = useStore((state)=>state["Home"]["Flex902"]);
const Flex902IoProps = useIoStore((state)=>state["Home"]["Flex902"]);
const Flex902Cb = useFlex902Cb()
const Flex898Props = useStore((state)=>state["Home"]["Flex898"]);
const Flex898IoProps = useIoStore((state)=>state["Home"]["Flex898"]);
const Flex898Cb = useFlex898Cb()
const Flex895Props = useStore((state)=>state["Home"]["Flex895"]);
const Flex895IoProps = useIoStore((state)=>state["Home"]["Flex895"]);
const Flex895Cb = useFlex895Cb()
const Flex892Props = useStore((state)=>state["Home"]["Flex892"]);
const Flex892IoProps = useIoStore((state)=>state["Home"]["Flex892"]);
const Flex892Cb = useFlex892Cb()
const Flex908cardProps = useStore((state)=>state["Home"]["Flex908card"]);
const Flex908cardIoProps = useIoStore((state)=>state["Home"]["Flex908card"]);
const Flex908cardCb = useFlex908cardCb()
const Flex905Props = useStore((state)=>state["Home"]["Flex905"]);
const Flex905IoProps = useIoStore((state)=>state["Home"]["Flex905"]);
const Flex905Cb = useFlex905Cb()
const Flex899Props = useStore((state)=>state["Home"]["Flex899"]);
const Flex899IoProps = useIoStore((state)=>state["Home"]["Flex899"]);
const Flex899Cb = useFlex899Cb()
const Flex896Props = useStore((state)=>state["Home"]["Flex896"]);
const Flex896IoProps = useIoStore((state)=>state["Home"]["Flex896"]);
const Flex896Cb = useFlex896Cb()
const Flex893Props = useStore((state)=>state["Home"]["Flex893"]);
const Flex893IoProps = useIoStore((state)=>state["Home"]["Flex893"]);
const Flex893Cb = useFlex893Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox230Props = useStore((state)=>state["Home"]["TextBox230"]);
const TextBox230IoProps = useIoStore((state)=>state["Home"]["TextBox230"]);
const TextBox230Cb = useTextBox230Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image84Props = useStore((state)=>state["Home"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox229Props = useStore((state)=>state["Home"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["Home"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Home"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image96Props = useStore((state)=>state["Home"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Home"]["Image96"]);
const Image96Cb = useImage96Cb()
const TextBox237Props = useStore((state)=>state["Home"]["TextBox237"]);
const TextBox237IoProps = useIoStore((state)=>state["Home"]["TextBox237"]);
const TextBox237Cb = useTextBox237Cb()
const TextBox238Props = useStore((state)=>state["Home"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["Home"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox239Props = useStore((state)=>state["Home"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["Home"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox508Props = useStore((state)=>state["Home"]["TextBox508"]);
const TextBox508IoProps = useIoStore((state)=>state["Home"]["TextBox508"]);
const TextBox508Cb = useTextBox508Cb()
const Image339Props = useStore((state)=>state["Home"]["Image339"]);
const Image339IoProps = useIoStore((state)=>state["Home"]["Image339"]);
const Image339Cb = useImage339Cb()
const Image340Props = useStore((state)=>state["Home"]["Image340"]);
const Image340IoProps = useIoStore((state)=>state["Home"]["Image340"]);
const Image340Cb = useImage340Cb()
const Image341Props = useStore((state)=>state["Home"]["Image341"]);
const Image341IoProps = useIoStore((state)=>state["Home"]["Image341"]);
const Image341Cb = useImage341Cb()
const Image342Props = useStore((state)=>state["Home"]["Image342"]);
const Image342IoProps = useIoStore((state)=>state["Home"]["Image342"]);
const Image342Cb = useImage342Cb()
const Image343Props = useStore((state)=>state["Home"]["Image343"]);
const Image343IoProps = useIoStore((state)=>state["Home"]["Image343"]);
const Image343Cb = useImage343Cb()
const Image356Props = useStore((state)=>state["Home"]["Image356"]);
const Image356IoProps = useIoStore((state)=>state["Home"]["Image356"]);
const Image356Cb = useImage356Cb()
const Image344Props = useStore((state)=>state["Home"]["Image344"]);
const Image344IoProps = useIoStore((state)=>state["Home"]["Image344"]);
const Image344Cb = useImage344Cb()
const Image345Props = useStore((state)=>state["Home"]["Image345"]);
const Image345IoProps = useIoStore((state)=>state["Home"]["Image345"]);
const Image345Cb = useImage345Cb()
const Image346Props = useStore((state)=>state["Home"]["Image346"]);
const Image346IoProps = useIoStore((state)=>state["Home"]["Image346"]);
const Image346Cb = useImage346Cb()
const Image347Props = useStore((state)=>state["Home"]["Image347"]);
const Image347IoProps = useIoStore((state)=>state["Home"]["Image347"]);
const Image347Cb = useImage347Cb()
const Image348Props = useStore((state)=>state["Home"]["Image348"]);
const Image348IoProps = useIoStore((state)=>state["Home"]["Image348"]);
const Image348Cb = useImage348Cb()
const Image354Props = useStore((state)=>state["Home"]["Image354"]);
const Image354IoProps = useIoStore((state)=>state["Home"]["Image354"]);
const Image354Cb = useImage354Cb()
const Image349Props = useStore((state)=>state["Home"]["Image349"]);
const Image349IoProps = useIoStore((state)=>state["Home"]["Image349"]);
const Image349Cb = useImage349Cb()
const Image350Props = useStore((state)=>state["Home"]["Image350"]);
const Image350IoProps = useIoStore((state)=>state["Home"]["Image350"]);
const Image350Cb = useImage350Cb()
const Image351Props = useStore((state)=>state["Home"]["Image351"]);
const Image351IoProps = useIoStore((state)=>state["Home"]["Image351"]);
const Image351Cb = useImage351Cb()
const Image352Props = useStore((state)=>state["Home"]["Image352"]);
const Image352IoProps = useIoStore((state)=>state["Home"]["Image352"]);
const Image352Cb = useImage352Cb()
const Image353Props = useStore((state)=>state["Home"]["Image353"]);
const Image353IoProps = useIoStore((state)=>state["Home"]["Image353"]);
const Image353Cb = useImage353Cb()
const Image358Props = useStore((state)=>state["Home"]["Image358"]);
const Image358IoProps = useIoStore((state)=>state["Home"]["Image358"]);
const Image358Cb = useImage358Cb()
const Flex878layProps = useStore((state)=>state["Home"]["Flex878lay"]);
const Flex878layIoProps = useIoStore((state)=>state["Home"]["Flex878lay"]);
const Flex878layCb = useFlex878layCb()
const TextBox634Props = useStore((state)=>state["Home"]["TextBox634"]);
const TextBox634IoProps = useIoStore((state)=>state["Home"]["TextBox634"]);
const TextBox634Cb = useTextBox634Cb()
const Image383Props = useStore((state)=>state["Home"]["Image383"]);
const Image383IoProps = useIoStore((state)=>state["Home"]["Image383"]);
const Image383Cb = useImage383Cb()
const Image382Props = useStore((state)=>state["Home"]["Image382"]);
const Image382IoProps = useIoStore((state)=>state["Home"]["Image382"]);
const Image382Cb = useImage382Cb()
const TextBox636Props = useStore((state)=>state["Home"]["TextBox636"]);
const TextBox636IoProps = useIoStore((state)=>state["Home"]["TextBox636"]);
const TextBox636Cb = useTextBox636Cb()
const TextBox637Props = useStore((state)=>state["Home"]["TextBox637"]);
const TextBox637IoProps = useIoStore((state)=>state["Home"]["TextBox637"]);
const TextBox637Cb = useTextBox637Cb()
const Flex882layProps = useStore((state)=>state["Home"]["Flex882lay"]);
const Flex882layIoProps = useIoStore((state)=>state["Home"]["Flex882lay"]);
const Flex882layCb = useFlex882layCb()
const TextBox640Props = useStore((state)=>state["Home"]["TextBox640"]);
const TextBox640IoProps = useIoStore((state)=>state["Home"]["TextBox640"]);
const TextBox640Cb = useTextBox640Cb()
const Image385Props = useStore((state)=>state["Home"]["Image385"]);
const Image385IoProps = useIoStore((state)=>state["Home"]["Image385"]);
const Image385Cb = useImage385Cb()
const Image384Props = useStore((state)=>state["Home"]["Image384"]);
const Image384IoProps = useIoStore((state)=>state["Home"]["Image384"]);
const Image384Cb = useImage384Cb()
const TextBox638Props = useStore((state)=>state["Home"]["TextBox638"]);
const TextBox638IoProps = useIoStore((state)=>state["Home"]["TextBox638"]);
const TextBox638Cb = useTextBox638Cb()
const TextBox639Props = useStore((state)=>state["Home"]["TextBox639"]);
const TextBox639IoProps = useIoStore((state)=>state["Home"]["TextBox639"]);
const TextBox639Cb = useTextBox639Cb()
const Flex888layProps = useStore((state)=>state["Home"]["Flex888lay"]);
const Flex888layIoProps = useIoStore((state)=>state["Home"]["Flex888lay"]);
const Flex888layCb = useFlex888layCb()
const TextBox643Props = useStore((state)=>state["Home"]["TextBox643"]);
const TextBox643IoProps = useIoStore((state)=>state["Home"]["TextBox643"]);
const TextBox643Cb = useTextBox643Cb()
const Image387Props = useStore((state)=>state["Home"]["Image387"]);
const Image387IoProps = useIoStore((state)=>state["Home"]["Image387"]);
const Image387Cb = useImage387Cb()
const Image386Props = useStore((state)=>state["Home"]["Image386"]);
const Image386IoProps = useIoStore((state)=>state["Home"]["Image386"]);
const Image386Cb = useImage386Cb()
const TextBox641Props = useStore((state)=>state["Home"]["TextBox641"]);
const TextBox641IoProps = useIoStore((state)=>state["Home"]["TextBox641"]);
const TextBox641Cb = useTextBox641Cb()
const TextBox642Props = useStore((state)=>state["Home"]["TextBox642"]);
const TextBox642IoProps = useIoStore((state)=>state["Home"]["TextBox642"]);
const TextBox642Cb = useTextBox642Cb()
const Flex901layProps = useStore((state)=>state["Home"]["Flex901lay"]);
const Flex901layIoProps = useIoStore((state)=>state["Home"]["Flex901lay"]);
const Flex901layCb = useFlex901layCb()
const TextBox650Props = useStore((state)=>state["Home"]["TextBox650"]);
const TextBox650IoProps = useIoStore((state)=>state["Home"]["TextBox650"]);
const TextBox650Cb = useTextBox650Cb()
const Image391Props = useStore((state)=>state["Home"]["Image391"]);
const Image391IoProps = useIoStore((state)=>state["Home"]["Image391"]);
const Image391Cb = useImage391Cb()
const Image388Props = useStore((state)=>state["Home"]["Image388"]);
const Image388IoProps = useIoStore((state)=>state["Home"]["Image388"]);
const Image388Cb = useImage388Cb()
const TextBox644Props = useStore((state)=>state["Home"]["TextBox644"]);
const TextBox644IoProps = useIoStore((state)=>state["Home"]["TextBox644"]);
const TextBox644Cb = useTextBox644Cb()
const TextBox645Props = useStore((state)=>state["Home"]["TextBox645"]);
const TextBox645IoProps = useIoStore((state)=>state["Home"]["TextBox645"]);
const TextBox645Cb = useTextBox645Cb()
const Flex903layProps = useStore((state)=>state["Home"]["Flex903lay"]);
const Flex903layIoProps = useIoStore((state)=>state["Home"]["Flex903lay"]);
const Flex903layCb = useFlex903layCb()
const TextBox651Props = useStore((state)=>state["Home"]["TextBox651"]);
const TextBox651IoProps = useIoStore((state)=>state["Home"]["TextBox651"]);
const TextBox651Cb = useTextBox651Cb()
const Image392Props = useStore((state)=>state["Home"]["Image392"]);
const Image392IoProps = useIoStore((state)=>state["Home"]["Image392"]);
const Image392Cb = useImage392Cb()
const Image389Props = useStore((state)=>state["Home"]["Image389"]);
const Image389IoProps = useIoStore((state)=>state["Home"]["Image389"]);
const Image389Cb = useImage389Cb()
const TextBox646Props = useStore((state)=>state["Home"]["TextBox646"]);
const TextBox646IoProps = useIoStore((state)=>state["Home"]["TextBox646"]);
const TextBox646Cb = useTextBox646Cb()
const TextBox647Props = useStore((state)=>state["Home"]["TextBox647"]);
const TextBox647IoProps = useIoStore((state)=>state["Home"]["TextBox647"]);
const TextBox647Cb = useTextBox647Cb()
const Flex904layProps = useStore((state)=>state["Home"]["Flex904lay"]);
const Flex904layIoProps = useIoStore((state)=>state["Home"]["Flex904lay"]);
const Flex904layCb = useFlex904layCb()
const TextBox652Props = useStore((state)=>state["Home"]["TextBox652"]);
const TextBox652IoProps = useIoStore((state)=>state["Home"]["TextBox652"]);
const TextBox652Cb = useTextBox652Cb()
const Image393Props = useStore((state)=>state["Home"]["Image393"]);
const Image393IoProps = useIoStore((state)=>state["Home"]["Image393"]);
const Image393Cb = useImage393Cb()
const Image390Props = useStore((state)=>state["Home"]["Image390"]);
const Image390IoProps = useIoStore((state)=>state["Home"]["Image390"]);
const Image390Cb = useImage390Cb()
const TextBox648Props = useStore((state)=>state["Home"]["TextBox648"]);
const TextBox648IoProps = useIoStore((state)=>state["Home"]["TextBox648"]);
const TextBox648Cb = useTextBox648Cb()
const TextBox649Props = useStore((state)=>state["Home"]["TextBox649"]);
const TextBox649IoProps = useIoStore((state)=>state["Home"]["TextBox649"]);
const TextBox649Cb = useTextBox649Cb()

  return (<>
  <Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Flex>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
</Menu>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex className="p-Home Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<TextBox className="p-Home TextBox508 bpt" {...TextBox508Props} {...TextBox508Cb} {...TextBox508IoProps}/>
<Flex className="p-Home Flex788 bpt" {...Flex788Props} {...Flex788Cb} {...Flex788IoProps}>
<Flex className="p-Home Flex789 bpt" {...Flex789Props} {...Flex789Cb} {...Flex789IoProps}>
<Image className="p-Home Image339 bpt" {...Image339Props} {...Image339Cb} {...Image339IoProps}/>
<Image className="p-Home Image340 bpt" {...Image340Props} {...Image340Cb} {...Image340IoProps}/>
<Image className="p-Home Image341 bpt" {...Image341Props} {...Image341Cb} {...Image341IoProps}/>
<Image className="p-Home Image342 bpt" {...Image342Props} {...Image342Cb} {...Image342IoProps}/>
<Image className="p-Home Image343 bpt" {...Image343Props} {...Image343Cb} {...Image343IoProps}/>
<Image className="p-Home Image356 bpt" {...Image356Props} {...Image356Cb} {...Image356IoProps}/>
</Flex>
<Flex className="p-Home Flex830 bpt" {...Flex830Props} {...Flex830Cb} {...Flex830IoProps}>
<Image className="p-Home Image348 bpt" {...Image348Props} {...Image348Cb} {...Image348IoProps}/>
<Image className="p-Home Image354 bpt" {...Image354Props} {...Image354Cb} {...Image354IoProps}/>
<Image className="p-Home Image347 bpt" {...Image347Props} {...Image347Cb} {...Image347IoProps}/>
<Image className="p-Home Image346 bpt" {...Image346Props} {...Image346Cb} {...Image346IoProps}/>
<Image className="p-Home Image345 bpt" {...Image345Props} {...Image345Cb} {...Image345IoProps}/>
<Image className="p-Home Image344 bpt" {...Image344Props} {...Image344Cb} {...Image344IoProps}/>
</Flex>
<Flex className="p-Home Flex831 bpt" {...Flex831Props} {...Flex831Cb} {...Flex831IoProps}>
<Image className="p-Home Image358 bpt" {...Image358Props} {...Image358Cb} {...Image358IoProps}/>
<Image className="p-Home Image353 bpt" {...Image353Props} {...Image353Cb} {...Image353IoProps}/>
<Image className="p-Home Image352 bpt" {...Image352Props} {...Image352Cb} {...Image352IoProps}/>
<Image className="p-Home Image351 bpt" {...Image351Props} {...Image351Cb} {...Image351IoProps}/>
<Image className="p-Home Image350 bpt" {...Image350Props} {...Image350Cb} {...Image350IoProps}/>
<Image className="p-Home Image349 bpt" {...Image349Props} {...Image349Cb} {...Image349IoProps}/>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex className="p-Home Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<TextBox className="p-Home TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Flex className="p-Home Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Flex className="p-Home Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<TextBox className="p-Home TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
<TextBox className="p-Home TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
</Flex>
<Flex className="p-Home Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Flex className="p-Home Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox className="p-Home TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
<TextBox className="p-Home TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
<TextBox className="p-Home TextBox237 bpt" {...TextBox237Props} {...TextBox237Cb} {...TextBox237IoProps}/>
</Flex>
<Flex className="p-Home Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Image className="p-Home Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Flex className="p-Home Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
</Flex>
<Flex className="p-Home Flex227 bpt" {...Flex227Props} {...Flex227Cb} {...Flex227IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Flex className="p-Home Flex226 bpt" {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Flex className="p-Home Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Flex>
<Flex className="p-Home Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Flex className="p-Home Flex208 bpt" {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Flex>
<Flex className="p-Home Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
<Flex className="p-Home Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
</Flex>
<Flex className="p-Home Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Flex className="p-Home Flex871 bpt" {...Flex871Props} {...Flex871Cb} {...Flex871IoProps}>
<Flex className="p-Home Flex909 bpt" {...Flex909Props} {...Flex909Cb} {...Flex909IoProps}>
<Flex className="p-Home Flex907card bpt" {...Flex907cardProps} {...Flex907cardCb} {...Flex907cardIoProps}>
<Flex className="p-Home Flex902 bpt" {...Flex902Props} {...Flex902Cb} {...Flex902IoProps}>
<Flex className="p-Home Flex898 bpt" {...Flex898Props} {...Flex898Cb} {...Flex898IoProps}>
<Flex className="p-Home Flex895 bpt" {...Flex895Props} {...Flex895Cb} {...Flex895IoProps}>
<Image className="p-Home Image389 bpt" {...Image389Props} {...Image389Cb} {...Image389IoProps}/>
<Flex className="p-Home Flex892 bpt" {...Flex892Props} {...Flex892Cb} {...Flex892IoProps}>
<TextBox className="p-Home TextBox646 bpt" {...TextBox646Props} {...TextBox646Cb} {...TextBox646IoProps}/>
<TextBox className="p-Home TextBox647 bpt" {...TextBox647Props} {...TextBox647Cb} {...TextBox647IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image392 bpt" {...Image392Props} {...Image392Cb} {...Image392IoProps}/>
</Flex>
<TextBox className="p-Home TextBox651 bpt" {...TextBox651Props} {...TextBox651Cb} {...TextBox651IoProps}/>
</Flex>
<Flex className="p-Home Flex903lay bpt" {...Flex903layProps} {...Flex903layCb} {...Flex903layIoProps}/>
</Flex>
<Flex className="p-Home Flex906card bpt" {...Flex906cardProps} {...Flex906cardCb} {...Flex906cardIoProps}>
<Flex className="p-Home Flex900 bpt" {...Flex900Props} {...Flex900Cb} {...Flex900IoProps}>
<Flex className="p-Home Flex897 bpt" {...Flex897Props} {...Flex897Cb} {...Flex897IoProps}>
<Flex className="p-Home Flex894 bpt" {...Flex894Props} {...Flex894Cb} {...Flex894IoProps}>
<Image className="p-Home Image388 bpt" {...Image388Props} {...Image388Cb} {...Image388IoProps}/>
<Flex className="p-Home Flex891 bpt" {...Flex891Props} {...Flex891Cb} {...Flex891IoProps}>
<TextBox className="p-Home TextBox644 bpt" {...TextBox644Props} {...TextBox644Cb} {...TextBox644IoProps}/>
<TextBox className="p-Home TextBox645 bpt" {...TextBox645Props} {...TextBox645Cb} {...TextBox645IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image391 bpt" {...Image391Props} {...Image391Cb} {...Image391IoProps}/>
</Flex>
<TextBox className="p-Home TextBox650 bpt" {...TextBox650Props} {...TextBox650Cb} {...TextBox650IoProps}/>
</Flex>
<Flex className="p-Home Flex901lay bpt" {...Flex901layProps} {...Flex901layCb} {...Flex901layIoProps}/>
</Flex>
<Flex className="p-Home Flex908card bpt" {...Flex908cardProps} {...Flex908cardCb} {...Flex908cardIoProps}>
<Flex className="p-Home Flex905 bpt" {...Flex905Props} {...Flex905Cb} {...Flex905IoProps}>
<Flex className="p-Home Flex899 bpt" {...Flex899Props} {...Flex899Cb} {...Flex899IoProps}>
<Flex className="p-Home Flex896 bpt" {...Flex896Props} {...Flex896Cb} {...Flex896IoProps}>
<Image className="p-Home Image390 bpt" {...Image390Props} {...Image390Cb} {...Image390IoProps}/>
<Flex className="p-Home Flex893 bpt" {...Flex893Props} {...Flex893Cb} {...Flex893IoProps}>
<TextBox className="p-Home TextBox649 bpt" {...TextBox649Props} {...TextBox649Cb} {...TextBox649IoProps}/>
<TextBox className="p-Home TextBox648 bpt" {...TextBox648Props} {...TextBox648Cb} {...TextBox648IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image393 bpt" {...Image393Props} {...Image393Cb} {...Image393IoProps}/>
</Flex>
<TextBox className="p-Home TextBox652 bpt" {...TextBox652Props} {...TextBox652Cb} {...TextBox652IoProps}/>
</Flex>
<Flex className="p-Home Flex904lay bpt" {...Flex904layProps} {...Flex904layCb} {...Flex904layIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex872 bpt" {...Flex872Props} {...Flex872Cb} {...Flex872IoProps}>
<Flex className="p-Home Flex884card bpt" {...Flex884cardProps} {...Flex884cardCb} {...Flex884cardIoProps}>
<Flex className="p-Home Flex883 bpt" {...Flex883Props} {...Flex883Cb} {...Flex883IoProps}>
<Flex className="p-Home Flex881 bpt" {...Flex881Props} {...Flex881Cb} {...Flex881IoProps}>
<Flex className="p-Home Flex880 bpt" {...Flex880Props} {...Flex880Cb} {...Flex880IoProps}>
<Image className="p-Home Image384 bpt" {...Image384Props} {...Image384Cb} {...Image384IoProps}/>
<Flex className="p-Home Flex879 bpt" {...Flex879Props} {...Flex879Cb} {...Flex879IoProps}>
<TextBox className="p-Home TextBox639 bpt" {...TextBox639Props} {...TextBox639Cb} {...TextBox639IoProps}/>
<TextBox className="p-Home TextBox638 bpt" {...TextBox638Props} {...TextBox638Cb} {...TextBox638IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image385 bpt" {...Image385Props} {...Image385Cb} {...Image385IoProps}/>
</Flex>
<TextBox className="p-Home TextBox640 bpt" {...TextBox640Props} {...TextBox640Cb} {...TextBox640IoProps}/>
</Flex>
<Flex className="p-Home Flex882lay bpt" {...Flex882layProps} {...Flex882layCb} {...Flex882layIoProps}/>
</Flex>
<Flex className="p-Home Flex890card bpt" {...Flex890cardProps} {...Flex890cardCb} {...Flex890cardIoProps}>
<Flex className="p-Home Flex889 bpt" {...Flex889Props} {...Flex889Cb} {...Flex889IoProps}>
<Flex className="p-Home Flex887 bpt" {...Flex887Props} {...Flex887Cb} {...Flex887IoProps}>
<Flex className="p-Home Flex886 bpt" {...Flex886Props} {...Flex886Cb} {...Flex886IoProps}>
<Image className="p-Home Image386 bpt" {...Image386Props} {...Image386Cb} {...Image386IoProps}/>
<Flex className="p-Home Flex885 bpt" {...Flex885Props} {...Flex885Cb} {...Flex885IoProps}>
<TextBox className="p-Home TextBox642 bpt" {...TextBox642Props} {...TextBox642Cb} {...TextBox642IoProps}/>
<TextBox className="p-Home TextBox641 bpt" {...TextBox641Props} {...TextBox641Cb} {...TextBox641IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image387 bpt" {...Image387Props} {...Image387Cb} {...Image387IoProps}/>
</Flex>
<TextBox className="p-Home TextBox643 bpt" {...TextBox643Props} {...TextBox643Cb} {...TextBox643IoProps}/>
</Flex>
<Flex className="p-Home Flex888lay bpt" {...Flex888layProps} {...Flex888layCb} {...Flex888layIoProps}/>
</Flex>
<Flex className="p-Home Flex874card bpt" {...Flex874cardProps} {...Flex874cardCb} {...Flex874cardIoProps}>
<Flex className="p-Home Flex873data bpt" {...Flex873dataProps} {...Flex873dataCb} {...Flex873dataIoProps}>
<Flex className="p-Home Flex875 bpt" {...Flex875Props} {...Flex875Cb} {...Flex875IoProps}>
<Flex className="p-Home Flex876det bpt" {...Flex876detProps} {...Flex876detCb} {...Flex876detIoProps}>
<Image className="p-Home Image382 bpt" {...Image382Props} {...Image382Cb} {...Image382IoProps}/>
<Flex className="p-Home Flex877 bpt" {...Flex877Props} {...Flex877Cb} {...Flex877IoProps}>
<TextBox className="p-Home TextBox636 bpt" {...TextBox636Props} {...TextBox636Cb} {...TextBox636IoProps}/>
<TextBox className="p-Home TextBox637 bpt" {...TextBox637Props} {...TextBox637Cb} {...TextBox637IoProps}/>
</Flex>
</Flex>
<Image className="p-Home Image383 bpt" {...Image383Props} {...Image383Cb} {...Image383IoProps}/>
</Flex>
<TextBox className="p-Home TextBox634 bpt" {...TextBox634Props} {...TextBox634Cb} {...TextBox634IoProps}/>
</Flex>
<Flex className="p-Home Flex878lay bpt" {...Flex878layProps} {...Flex878layCb} {...Flex878layIoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Flex className="p-Home Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<Flex className="p-Home Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Image className="p-Home Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox className="p-Home TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
</Flex>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex>
<TextBox className="p-Home TextBox230 bpt" {...TextBox230Props} {...TextBox230Cb} {...TextBox230IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
  </>);
}
