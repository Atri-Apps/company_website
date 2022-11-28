import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Overlay as Overlay1 } from "@atrilabs/react-component-manifests/src/manifests/Overlay/Overlay.tsx";
import { Menu as Menu2 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Upload as Upload1 } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex462Cb, useOverlay3Cb, useFlex786Cb, useFlex784Cb, useFlex779Cb, useFlex770Cb, useFlex771Cb, useFlex780Cb, useFlex772Cb, useFlex773Cb, useFlex781Cb, useFlex774Cb, useFlex775Cb, useFlex782Cb, useFlex776Cb, useFlex777Cb, useFlex785Cb, useFlex783Cb, useFlex778Cb, useFlex769Cb, useFlex766Cb, useFlex767Cb, useTag_Flex_1Cb, useTag_Flex_2Cb, useTag_Flex_3Cb, useFlex768Cb, useFlex764Cb, useFlex765Cb, useFlex463Cb, useFlex466Cb, useFlex467Cb, useFilter1Cb, useFilter2Cb, useFilter3Cb, useFilter4Cb, useFilter5Cb, useFilter6Cb, useFilter7Cb, useFilter8Cb, useFilter9Cb, useFlex468Cb, useFlex469Cb, useCard_1Cb, useFlex481Cb, useFlex482Cb, useFlex483Cb, useCard_Tag_1_aCb, useCard_Tag_1_bCb, useCard_Tag_1_cCb, useFlex484Cb, useFlex485Cb, useFlex486Cb, useCard_2Cb, useFlex528Cb, useFlex525Cb, useFlex523Cb, useFlex524Cb, useFlex527Cb, useFlex657Cb, useCard_Tag_2_cCb, useCard_Tag_2_bCb, useCard_Tag_2_aCb, useCard_3Cb, useFlex535Cb, useFlex532Cb, useFlex534Cb, useFlex530Cb, useFlex531Cb, useFlex661Cb, useCard_Tag_3_cCb, useCard_Tag_3_bCb, useCard_Tag_3_aCb, useFlex646Cb, useCard_6Cb, useFlex640Cb, useFlex632Cb, useFlex625Cb, useFlex626Cb, useFlex633Cb, useFlex673Cb, useCard_Tag_6_cCb, useCard_Tag_6_bCb, useCard_Tag_6_aCb, useCard_5Cb, useFlex641Cb, useFlex635Cb, useFlex636Cb, useFlex627Cb, useFlex628Cb, useFlex669Cb, useCard_Tag_5_cCb, useCard_Tag_5_bCb, useCard_Tag_5_aCb, useCard_4Cb, useFlex642Cb, useFlex637Cb, useFlex629Cb, useFlex630Cb, useFlex639Cb, useFlex665Cb, useCard_Tag_4_cCb, useCard_Tag_4_bCb, useCard_Tag_4_aCb, useFlex674Cb, useFlex675Cb, useFlex706Cb, useFlex624Cb, useFlex621Cb, useFlex620Cb, useMenu7Cb, useFlex618Cb, useFlex619Cb, useFlex623Cb, useFlex647Cb, useFlex705Cb, useFlex702Cb, useFlex703Cb, useFlex699Cb, useFlex692Cb, useFlex704Cb, useFlex700Cb, useFlex693Cb, useFlex687Cb, useFlex686Cb, useFlex685Cb, useFlex694Cb, useFlex701Cb, useFlex695Cb, useFlex688Cb, useFlex696Cb, useFlex689Cb, useFlex697Cb, useFlex690Cb, useFlex698Cb, useFlex691Cb, useTextBox361Cb, useTextBox362Cb, useButton116Cb, useButton235Cb, useTextBox499Cb, useInput19Cb, useInput20Cb, useTextBox500Cb, useTextBox501Cb, useInput21Cb, useInput22Cb, useTextBox502Cb, useTextBox503Cb, useInput23Cb, useTextBox504Cb, useInput24Cb, useTextBox505Cb, useUpload3Cb, useTextBox506Cb, useUpload4Cb, useTextBox507Cb, useImage319Cb, useImage318Cb, useTextBox497Cb, useTextBox498Cb, useTag_1Cb, useTag_2Cb, useTag_3Cb, useImage315Cb, useImage316Cb, useImage317Cb, useTextBox496Cb, useTextBox363Cb, useTextBox364Cb, useFilter_Btn_1Cb, useFilter_Btn_2Cb, useFilter_Btn_3Cb, useFilter_Btn_4Cb, useFilter_Btn_5Cb, useFilter_Btn_6Cb, useFilter_Btn_7Cb, useFilter_Btn_8Cb, useFilter_Btn_9Cb, useCard_Image_1Cb, useCard_Title_1Cb, useCard_Text_1Cb, useCard_Tag_1_a_TextCb, useCard_Tag_1_b_TextCb, useCard_Tag_1_c_TextCb, useCard_Github_1Cb, useCard_Deploy_1Cb, useCard_Creator_Image_1Cb, useCard_Creator_Name_1Cb, useCard_Image_2Cb, useCard_Creator_Name_2Cb, useCard_Creator_Image_2Cb, useCard_Deploy_2Cb, useCard_Github_2Cb, useCard_Text_2Cb, useCard_Title_2Cb, useCard_Tag_2_c_TextCb, useCard_Tag_2_b_TextCb, useCard_Tag_2_a_TextCb, useCard_Image_3Cb, useCard_Title_3Cb, useCard_Text_3Cb, useCard_Github_3Cb, useCard_Deploy_3Cb, useCard_Creator_Image_3Cb, useCard_Creator_Name_3Cb, useCard_Tag_3_c_TextCb, useCard_Tag_3_b_TextCb, useCard_Tag_3_a_TextCb, useCard_Image_6Cb, useCard_Creator_Name_6Cb, useCard_Creator_Image_6Cb, useCard_Deploy_6Cb, useCard_Github_6Cb, useCard_Text_6Cb, useCard_Title_6Cb, useCard_Tag_6_c_TextCb, useCard_Tag_6_b_TextCb, useCard_Tag_6_a_TextCb, useCard_Image_5Cb, useCard_Title_5Cb, useCard_Text_5Cb, useCard_Github_5Cb, useCard_Deploy_5Cb, useCard_Creator_Image_5Cb, useCard_Creator_Name_5Cb, useCard_Tag_5_c_TextCb, useCard_Tag_5_b_TextCb, useCard_Tag_5_a_TextCb, useCard_Image_4Cb, useCard_Creator_Name_4Cb, useCard_Creator_Image_4Cb, useCard_Deploy_4Cb, useCard_Github_4Cb, useCard_Text_4Cb, useCard_Title_4Cb, useCard_Tag_4_c_TextCb, useCard_Tag_4_b_TextCb, useCard_Tag_4_a_TextCb, useImage303Cb, useImage304Cb, useTextBox474Cb, useTextBox453Cb, useImage278Cb, useTextBox430Cb, useTextBox431Cb, useButton200Cb, useTextBox438Cb, useImage279Cb, useTextBox448Cb, useTextBox449Cb, useTextBox450Cb, useTextBox451Cb, useImage300Cb, useTextBox472Cb, useTextBox466Cb, useTextBox467Cb, useTextBox456Cb, useImage295Cb, useTextBox455Cb, useImage294Cb, useImage296Cb, useImage297Cb, useImage298Cb, useImage299Cb, useTextBox468Cb, useTextBox457Cb, useTextBox469Cb, useTextBox458Cb, useTextBox459Cb, useTextBox460Cb, useTextBox470Cb, useTextBox461Cb, useTextBox462Cb, useTextBox463Cb, useTextBox471Cb, useTextBox464Cb, useTextBox465Cb } from "../page-cbs/Showcase";
import "../page-css/Showcase.css";
import "../custom/Showcase";

export default function Showcase() {
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

  const Flex462Props = useStore((state)=>state["Showcase"]["Flex462"]);
const Flex462IoProps = useIoStore((state)=>state["Showcase"]["Flex462"]);
const Flex462Cb = useFlex462Cb()
const Overlay3Props = useStore((state)=>state["Showcase"]["Overlay3"]);
const Overlay3IoProps = useIoStore((state)=>state["Showcase"]["Overlay3"]);
const Overlay3Cb = useOverlay3Cb()
const Flex786Props = useStore((state)=>state["Showcase"]["Flex786"]);
const Flex786IoProps = useIoStore((state)=>state["Showcase"]["Flex786"]);
const Flex786Cb = useFlex786Cb()
const Flex784Props = useStore((state)=>state["Showcase"]["Flex784"]);
const Flex784IoProps = useIoStore((state)=>state["Showcase"]["Flex784"]);
const Flex784Cb = useFlex784Cb()
const Flex779Props = useStore((state)=>state["Showcase"]["Flex779"]);
const Flex779IoProps = useIoStore((state)=>state["Showcase"]["Flex779"]);
const Flex779Cb = useFlex779Cb()
const Flex770Props = useStore((state)=>state["Showcase"]["Flex770"]);
const Flex770IoProps = useIoStore((state)=>state["Showcase"]["Flex770"]);
const Flex770Cb = useFlex770Cb()
const Flex771Props = useStore((state)=>state["Showcase"]["Flex771"]);
const Flex771IoProps = useIoStore((state)=>state["Showcase"]["Flex771"]);
const Flex771Cb = useFlex771Cb()
const Flex780Props = useStore((state)=>state["Showcase"]["Flex780"]);
const Flex780IoProps = useIoStore((state)=>state["Showcase"]["Flex780"]);
const Flex780Cb = useFlex780Cb()
const Flex772Props = useStore((state)=>state["Showcase"]["Flex772"]);
const Flex772IoProps = useIoStore((state)=>state["Showcase"]["Flex772"]);
const Flex772Cb = useFlex772Cb()
const Flex773Props = useStore((state)=>state["Showcase"]["Flex773"]);
const Flex773IoProps = useIoStore((state)=>state["Showcase"]["Flex773"]);
const Flex773Cb = useFlex773Cb()
const Flex781Props = useStore((state)=>state["Showcase"]["Flex781"]);
const Flex781IoProps = useIoStore((state)=>state["Showcase"]["Flex781"]);
const Flex781Cb = useFlex781Cb()
const Flex774Props = useStore((state)=>state["Showcase"]["Flex774"]);
const Flex774IoProps = useIoStore((state)=>state["Showcase"]["Flex774"]);
const Flex774Cb = useFlex774Cb()
const Flex775Props = useStore((state)=>state["Showcase"]["Flex775"]);
const Flex775IoProps = useIoStore((state)=>state["Showcase"]["Flex775"]);
const Flex775Cb = useFlex775Cb()
const Flex782Props = useStore((state)=>state["Showcase"]["Flex782"]);
const Flex782IoProps = useIoStore((state)=>state["Showcase"]["Flex782"]);
const Flex782Cb = useFlex782Cb()
const Flex776Props = useStore((state)=>state["Showcase"]["Flex776"]);
const Flex776IoProps = useIoStore((state)=>state["Showcase"]["Flex776"]);
const Flex776Cb = useFlex776Cb()
const Flex777Props = useStore((state)=>state["Showcase"]["Flex777"]);
const Flex777IoProps = useIoStore((state)=>state["Showcase"]["Flex777"]);
const Flex777Cb = useFlex777Cb()
const Flex785Props = useStore((state)=>state["Showcase"]["Flex785"]);
const Flex785IoProps = useIoStore((state)=>state["Showcase"]["Flex785"]);
const Flex785Cb = useFlex785Cb()
const Flex783Props = useStore((state)=>state["Showcase"]["Flex783"]);
const Flex783IoProps = useIoStore((state)=>state["Showcase"]["Flex783"]);
const Flex783Cb = useFlex783Cb()
const Flex778Props = useStore((state)=>state["Showcase"]["Flex778"]);
const Flex778IoProps = useIoStore((state)=>state["Showcase"]["Flex778"]);
const Flex778Cb = useFlex778Cb()
const Flex769Props = useStore((state)=>state["Showcase"]["Flex769"]);
const Flex769IoProps = useIoStore((state)=>state["Showcase"]["Flex769"]);
const Flex769Cb = useFlex769Cb()
const Flex766Props = useStore((state)=>state["Showcase"]["Flex766"]);
const Flex766IoProps = useIoStore((state)=>state["Showcase"]["Flex766"]);
const Flex766Cb = useFlex766Cb()
const Flex767Props = useStore((state)=>state["Showcase"]["Flex767"]);
const Flex767IoProps = useIoStore((state)=>state["Showcase"]["Flex767"]);
const Flex767Cb = useFlex767Cb()
const Tag_Flex_1Props = useStore((state)=>state["Showcase"]["Tag_Flex_1"]);
const Tag_Flex_1IoProps = useIoStore((state)=>state["Showcase"]["Tag_Flex_1"]);
const Tag_Flex_1Cb = useTag_Flex_1Cb()
const Tag_Flex_2Props = useStore((state)=>state["Showcase"]["Tag_Flex_2"]);
const Tag_Flex_2IoProps = useIoStore((state)=>state["Showcase"]["Tag_Flex_2"]);
const Tag_Flex_2Cb = useTag_Flex_2Cb()
const Tag_Flex_3Props = useStore((state)=>state["Showcase"]["Tag_Flex_3"]);
const Tag_Flex_3IoProps = useIoStore((state)=>state["Showcase"]["Tag_Flex_3"]);
const Tag_Flex_3Cb = useTag_Flex_3Cb()
const Flex768Props = useStore((state)=>state["Showcase"]["Flex768"]);
const Flex768IoProps = useIoStore((state)=>state["Showcase"]["Flex768"]);
const Flex768Cb = useFlex768Cb()
const Flex764Props = useStore((state)=>state["Showcase"]["Flex764"]);
const Flex764IoProps = useIoStore((state)=>state["Showcase"]["Flex764"]);
const Flex764Cb = useFlex764Cb()
const Flex765Props = useStore((state)=>state["Showcase"]["Flex765"]);
const Flex765IoProps = useIoStore((state)=>state["Showcase"]["Flex765"]);
const Flex765Cb = useFlex765Cb()
const Flex463Props = useStore((state)=>state["Showcase"]["Flex463"]);
const Flex463IoProps = useIoStore((state)=>state["Showcase"]["Flex463"]);
const Flex463Cb = useFlex463Cb()
const Flex466Props = useStore((state)=>state["Showcase"]["Flex466"]);
const Flex466IoProps = useIoStore((state)=>state["Showcase"]["Flex466"]);
const Flex466Cb = useFlex466Cb()
const Flex467Props = useStore((state)=>state["Showcase"]["Flex467"]);
const Flex467IoProps = useIoStore((state)=>state["Showcase"]["Flex467"]);
const Flex467Cb = useFlex467Cb()
const Filter1Props = useStore((state)=>state["Showcase"]["Filter1"]);
const Filter1IoProps = useIoStore((state)=>state["Showcase"]["Filter1"]);
const Filter1Cb = useFilter1Cb()
const Filter2Props = useStore((state)=>state["Showcase"]["Filter2"]);
const Filter2IoProps = useIoStore((state)=>state["Showcase"]["Filter2"]);
const Filter2Cb = useFilter2Cb()
const Filter3Props = useStore((state)=>state["Showcase"]["Filter3"]);
const Filter3IoProps = useIoStore((state)=>state["Showcase"]["Filter3"]);
const Filter3Cb = useFilter3Cb()
const Filter4Props = useStore((state)=>state["Showcase"]["Filter4"]);
const Filter4IoProps = useIoStore((state)=>state["Showcase"]["Filter4"]);
const Filter4Cb = useFilter4Cb()
const Filter5Props = useStore((state)=>state["Showcase"]["Filter5"]);
const Filter5IoProps = useIoStore((state)=>state["Showcase"]["Filter5"]);
const Filter5Cb = useFilter5Cb()
const Filter6Props = useStore((state)=>state["Showcase"]["Filter6"]);
const Filter6IoProps = useIoStore((state)=>state["Showcase"]["Filter6"]);
const Filter6Cb = useFilter6Cb()
const Filter7Props = useStore((state)=>state["Showcase"]["Filter7"]);
const Filter7IoProps = useIoStore((state)=>state["Showcase"]["Filter7"]);
const Filter7Cb = useFilter7Cb()
const Filter8Props = useStore((state)=>state["Showcase"]["Filter8"]);
const Filter8IoProps = useIoStore((state)=>state["Showcase"]["Filter8"]);
const Filter8Cb = useFilter8Cb()
const Filter9Props = useStore((state)=>state["Showcase"]["Filter9"]);
const Filter9IoProps = useIoStore((state)=>state["Showcase"]["Filter9"]);
const Filter9Cb = useFilter9Cb()
const Flex468Props = useStore((state)=>state["Showcase"]["Flex468"]);
const Flex468IoProps = useIoStore((state)=>state["Showcase"]["Flex468"]);
const Flex468Cb = useFlex468Cb()
const Flex469Props = useStore((state)=>state["Showcase"]["Flex469"]);
const Flex469IoProps = useIoStore((state)=>state["Showcase"]["Flex469"]);
const Flex469Cb = useFlex469Cb()
const Card_1Props = useStore((state)=>state["Showcase"]["Card_1"]);
const Card_1IoProps = useIoStore((state)=>state["Showcase"]["Card_1"]);
const Card_1Cb = useCard_1Cb()
const Flex481Props = useStore((state)=>state["Showcase"]["Flex481"]);
const Flex481IoProps = useIoStore((state)=>state["Showcase"]["Flex481"]);
const Flex481Cb = useFlex481Cb()
const Flex482Props = useStore((state)=>state["Showcase"]["Flex482"]);
const Flex482IoProps = useIoStore((state)=>state["Showcase"]["Flex482"]);
const Flex482Cb = useFlex482Cb()
const Flex483Props = useStore((state)=>state["Showcase"]["Flex483"]);
const Flex483IoProps = useIoStore((state)=>state["Showcase"]["Flex483"]);
const Flex483Cb = useFlex483Cb()
const Card_Tag_1_aProps = useStore((state)=>state["Showcase"]["Card_Tag_1_a"]);
const Card_Tag_1_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_a"]);
const Card_Tag_1_aCb = useCard_Tag_1_aCb()
const Card_Tag_1_bProps = useStore((state)=>state["Showcase"]["Card_Tag_1_b"]);
const Card_Tag_1_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_b"]);
const Card_Tag_1_bCb = useCard_Tag_1_bCb()
const Card_Tag_1_cProps = useStore((state)=>state["Showcase"]["Card_Tag_1_c"]);
const Card_Tag_1_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_c"]);
const Card_Tag_1_cCb = useCard_Tag_1_cCb()
const Flex484Props = useStore((state)=>state["Showcase"]["Flex484"]);
const Flex484IoProps = useIoStore((state)=>state["Showcase"]["Flex484"]);
const Flex484Cb = useFlex484Cb()
const Flex485Props = useStore((state)=>state["Showcase"]["Flex485"]);
const Flex485IoProps = useIoStore((state)=>state["Showcase"]["Flex485"]);
const Flex485Cb = useFlex485Cb()
const Flex486Props = useStore((state)=>state["Showcase"]["Flex486"]);
const Flex486IoProps = useIoStore((state)=>state["Showcase"]["Flex486"]);
const Flex486Cb = useFlex486Cb()
const Card_2Props = useStore((state)=>state["Showcase"]["Card_2"]);
const Card_2IoProps = useIoStore((state)=>state["Showcase"]["Card_2"]);
const Card_2Cb = useCard_2Cb()
const Flex528Props = useStore((state)=>state["Showcase"]["Flex528"]);
const Flex528IoProps = useIoStore((state)=>state["Showcase"]["Flex528"]);
const Flex528Cb = useFlex528Cb()
const Flex525Props = useStore((state)=>state["Showcase"]["Flex525"]);
const Flex525IoProps = useIoStore((state)=>state["Showcase"]["Flex525"]);
const Flex525Cb = useFlex525Cb()
const Flex523Props = useStore((state)=>state["Showcase"]["Flex523"]);
const Flex523IoProps = useIoStore((state)=>state["Showcase"]["Flex523"]);
const Flex523Cb = useFlex523Cb()
const Flex524Props = useStore((state)=>state["Showcase"]["Flex524"]);
const Flex524IoProps = useIoStore((state)=>state["Showcase"]["Flex524"]);
const Flex524Cb = useFlex524Cb()
const Flex527Props = useStore((state)=>state["Showcase"]["Flex527"]);
const Flex527IoProps = useIoStore((state)=>state["Showcase"]["Flex527"]);
const Flex527Cb = useFlex527Cb()
const Flex657Props = useStore((state)=>state["Showcase"]["Flex657"]);
const Flex657IoProps = useIoStore((state)=>state["Showcase"]["Flex657"]);
const Flex657Cb = useFlex657Cb()
const Card_Tag_2_cProps = useStore((state)=>state["Showcase"]["Card_Tag_2_c"]);
const Card_Tag_2_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_c"]);
const Card_Tag_2_cCb = useCard_Tag_2_cCb()
const Card_Tag_2_bProps = useStore((state)=>state["Showcase"]["Card_Tag_2_b"]);
const Card_Tag_2_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_b"]);
const Card_Tag_2_bCb = useCard_Tag_2_bCb()
const Card_Tag_2_aProps = useStore((state)=>state["Showcase"]["Card_Tag_2_a"]);
const Card_Tag_2_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_a"]);
const Card_Tag_2_aCb = useCard_Tag_2_aCb()
const Card_3Props = useStore((state)=>state["Showcase"]["Card_3"]);
const Card_3IoProps = useIoStore((state)=>state["Showcase"]["Card_3"]);
const Card_3Cb = useCard_3Cb()
const Flex535Props = useStore((state)=>state["Showcase"]["Flex535"]);
const Flex535IoProps = useIoStore((state)=>state["Showcase"]["Flex535"]);
const Flex535Cb = useFlex535Cb()
const Flex532Props = useStore((state)=>state["Showcase"]["Flex532"]);
const Flex532IoProps = useIoStore((state)=>state["Showcase"]["Flex532"]);
const Flex532Cb = useFlex532Cb()
const Flex534Props = useStore((state)=>state["Showcase"]["Flex534"]);
const Flex534IoProps = useIoStore((state)=>state["Showcase"]["Flex534"]);
const Flex534Cb = useFlex534Cb()
const Flex530Props = useStore((state)=>state["Showcase"]["Flex530"]);
const Flex530IoProps = useIoStore((state)=>state["Showcase"]["Flex530"]);
const Flex530Cb = useFlex530Cb()
const Flex531Props = useStore((state)=>state["Showcase"]["Flex531"]);
const Flex531IoProps = useIoStore((state)=>state["Showcase"]["Flex531"]);
const Flex531Cb = useFlex531Cb()
const Flex661Props = useStore((state)=>state["Showcase"]["Flex661"]);
const Flex661IoProps = useIoStore((state)=>state["Showcase"]["Flex661"]);
const Flex661Cb = useFlex661Cb()
const Card_Tag_3_cProps = useStore((state)=>state["Showcase"]["Card_Tag_3_c"]);
const Card_Tag_3_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_c"]);
const Card_Tag_3_cCb = useCard_Tag_3_cCb()
const Card_Tag_3_bProps = useStore((state)=>state["Showcase"]["Card_Tag_3_b"]);
const Card_Tag_3_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_b"]);
const Card_Tag_3_bCb = useCard_Tag_3_bCb()
const Card_Tag_3_aProps = useStore((state)=>state["Showcase"]["Card_Tag_3_a"]);
const Card_Tag_3_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_a"]);
const Card_Tag_3_aCb = useCard_Tag_3_aCb()
const Flex646Props = useStore((state)=>state["Showcase"]["Flex646"]);
const Flex646IoProps = useIoStore((state)=>state["Showcase"]["Flex646"]);
const Flex646Cb = useFlex646Cb()
const Card_6Props = useStore((state)=>state["Showcase"]["Card_6"]);
const Card_6IoProps = useIoStore((state)=>state["Showcase"]["Card_6"]);
const Card_6Cb = useCard_6Cb()
const Flex640Props = useStore((state)=>state["Showcase"]["Flex640"]);
const Flex640IoProps = useIoStore((state)=>state["Showcase"]["Flex640"]);
const Flex640Cb = useFlex640Cb()
const Flex632Props = useStore((state)=>state["Showcase"]["Flex632"]);
const Flex632IoProps = useIoStore((state)=>state["Showcase"]["Flex632"]);
const Flex632Cb = useFlex632Cb()
const Flex625Props = useStore((state)=>state["Showcase"]["Flex625"]);
const Flex625IoProps = useIoStore((state)=>state["Showcase"]["Flex625"]);
const Flex625Cb = useFlex625Cb()
const Flex626Props = useStore((state)=>state["Showcase"]["Flex626"]);
const Flex626IoProps = useIoStore((state)=>state["Showcase"]["Flex626"]);
const Flex626Cb = useFlex626Cb()
const Flex633Props = useStore((state)=>state["Showcase"]["Flex633"]);
const Flex633IoProps = useIoStore((state)=>state["Showcase"]["Flex633"]);
const Flex633Cb = useFlex633Cb()
const Flex673Props = useStore((state)=>state["Showcase"]["Flex673"]);
const Flex673IoProps = useIoStore((state)=>state["Showcase"]["Flex673"]);
const Flex673Cb = useFlex673Cb()
const Card_Tag_6_cProps = useStore((state)=>state["Showcase"]["Card_Tag_6_c"]);
const Card_Tag_6_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_c"]);
const Card_Tag_6_cCb = useCard_Tag_6_cCb()
const Card_Tag_6_bProps = useStore((state)=>state["Showcase"]["Card_Tag_6_b"]);
const Card_Tag_6_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_b"]);
const Card_Tag_6_bCb = useCard_Tag_6_bCb()
const Card_Tag_6_aProps = useStore((state)=>state["Showcase"]["Card_Tag_6_a"]);
const Card_Tag_6_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_a"]);
const Card_Tag_6_aCb = useCard_Tag_6_aCb()
const Card_5Props = useStore((state)=>state["Showcase"]["Card_5"]);
const Card_5IoProps = useIoStore((state)=>state["Showcase"]["Card_5"]);
const Card_5Cb = useCard_5Cb()
const Flex641Props = useStore((state)=>state["Showcase"]["Flex641"]);
const Flex641IoProps = useIoStore((state)=>state["Showcase"]["Flex641"]);
const Flex641Cb = useFlex641Cb()
const Flex635Props = useStore((state)=>state["Showcase"]["Flex635"]);
const Flex635IoProps = useIoStore((state)=>state["Showcase"]["Flex635"]);
const Flex635Cb = useFlex635Cb()
const Flex636Props = useStore((state)=>state["Showcase"]["Flex636"]);
const Flex636IoProps = useIoStore((state)=>state["Showcase"]["Flex636"]);
const Flex636Cb = useFlex636Cb()
const Flex627Props = useStore((state)=>state["Showcase"]["Flex627"]);
const Flex627IoProps = useIoStore((state)=>state["Showcase"]["Flex627"]);
const Flex627Cb = useFlex627Cb()
const Flex628Props = useStore((state)=>state["Showcase"]["Flex628"]);
const Flex628IoProps = useIoStore((state)=>state["Showcase"]["Flex628"]);
const Flex628Cb = useFlex628Cb()
const Flex669Props = useStore((state)=>state["Showcase"]["Flex669"]);
const Flex669IoProps = useIoStore((state)=>state["Showcase"]["Flex669"]);
const Flex669Cb = useFlex669Cb()
const Card_Tag_5_cProps = useStore((state)=>state["Showcase"]["Card_Tag_5_c"]);
const Card_Tag_5_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_c"]);
const Card_Tag_5_cCb = useCard_Tag_5_cCb()
const Card_Tag_5_bProps = useStore((state)=>state["Showcase"]["Card_Tag_5_b"]);
const Card_Tag_5_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_b"]);
const Card_Tag_5_bCb = useCard_Tag_5_bCb()
const Card_Tag_5_aProps = useStore((state)=>state["Showcase"]["Card_Tag_5_a"]);
const Card_Tag_5_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_a"]);
const Card_Tag_5_aCb = useCard_Tag_5_aCb()
const Card_4Props = useStore((state)=>state["Showcase"]["Card_4"]);
const Card_4IoProps = useIoStore((state)=>state["Showcase"]["Card_4"]);
const Card_4Cb = useCard_4Cb()
const Flex642Props = useStore((state)=>state["Showcase"]["Flex642"]);
const Flex642IoProps = useIoStore((state)=>state["Showcase"]["Flex642"]);
const Flex642Cb = useFlex642Cb()
const Flex637Props = useStore((state)=>state["Showcase"]["Flex637"]);
const Flex637IoProps = useIoStore((state)=>state["Showcase"]["Flex637"]);
const Flex637Cb = useFlex637Cb()
const Flex629Props = useStore((state)=>state["Showcase"]["Flex629"]);
const Flex629IoProps = useIoStore((state)=>state["Showcase"]["Flex629"]);
const Flex629Cb = useFlex629Cb()
const Flex630Props = useStore((state)=>state["Showcase"]["Flex630"]);
const Flex630IoProps = useIoStore((state)=>state["Showcase"]["Flex630"]);
const Flex630Cb = useFlex630Cb()
const Flex639Props = useStore((state)=>state["Showcase"]["Flex639"]);
const Flex639IoProps = useIoStore((state)=>state["Showcase"]["Flex639"]);
const Flex639Cb = useFlex639Cb()
const Flex665Props = useStore((state)=>state["Showcase"]["Flex665"]);
const Flex665IoProps = useIoStore((state)=>state["Showcase"]["Flex665"]);
const Flex665Cb = useFlex665Cb()
const Card_Tag_4_cProps = useStore((state)=>state["Showcase"]["Card_Tag_4_c"]);
const Card_Tag_4_cIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_c"]);
const Card_Tag_4_cCb = useCard_Tag_4_cCb()
const Card_Tag_4_bProps = useStore((state)=>state["Showcase"]["Card_Tag_4_b"]);
const Card_Tag_4_bIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_b"]);
const Card_Tag_4_bCb = useCard_Tag_4_bCb()
const Card_Tag_4_aProps = useStore((state)=>state["Showcase"]["Card_Tag_4_a"]);
const Card_Tag_4_aIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_a"]);
const Card_Tag_4_aCb = useCard_Tag_4_aCb()
const Flex674Props = useStore((state)=>state["Showcase"]["Flex674"]);
const Flex674IoProps = useIoStore((state)=>state["Showcase"]["Flex674"]);
const Flex674Cb = useFlex674Cb()
const Flex675Props = useStore((state)=>state["Showcase"]["Flex675"]);
const Flex675IoProps = useIoStore((state)=>state["Showcase"]["Flex675"]);
const Flex675Cb = useFlex675Cb()
const Flex706Props = useStore((state)=>state["Showcase"]["Flex706"]);
const Flex706IoProps = useIoStore((state)=>state["Showcase"]["Flex706"]);
const Flex706Cb = useFlex706Cb()
const Flex624Props = useStore((state)=>state["Showcase"]["Flex624"]);
const Flex624IoProps = useIoStore((state)=>state["Showcase"]["Flex624"]);
const Flex624Cb = useFlex624Cb()
const Flex621Props = useStore((state)=>state["Showcase"]["Flex621"]);
const Flex621IoProps = useIoStore((state)=>state["Showcase"]["Flex621"]);
const Flex621Cb = useFlex621Cb()
const Flex620Props = useStore((state)=>state["Showcase"]["Flex620"]);
const Flex620IoProps = useIoStore((state)=>state["Showcase"]["Flex620"]);
const Flex620Cb = useFlex620Cb()
const Menu7Props = useStore((state)=>state["Showcase"]["Menu7"]);
const Menu7IoProps = useIoStore((state)=>state["Showcase"]["Menu7"]);
const Menu7Cb = useMenu7Cb()
const Flex618Props = useStore((state)=>state["Showcase"]["Flex618"]);
const Flex618IoProps = useIoStore((state)=>state["Showcase"]["Flex618"]);
const Flex618Cb = useFlex618Cb()
const Flex619Props = useStore((state)=>state["Showcase"]["Flex619"]);
const Flex619IoProps = useIoStore((state)=>state["Showcase"]["Flex619"]);
const Flex619Cb = useFlex619Cb()
const Flex623Props = useStore((state)=>state["Showcase"]["Flex623"]);
const Flex623IoProps = useIoStore((state)=>state["Showcase"]["Flex623"]);
const Flex623Cb = useFlex623Cb()
const Flex647Props = useStore((state)=>state["Showcase"]["Flex647"]);
const Flex647IoProps = useIoStore((state)=>state["Showcase"]["Flex647"]);
const Flex647Cb = useFlex647Cb()
const Flex705Props = useStore((state)=>state["Showcase"]["Flex705"]);
const Flex705IoProps = useIoStore((state)=>state["Showcase"]["Flex705"]);
const Flex705Cb = useFlex705Cb()
const Flex702Props = useStore((state)=>state["Showcase"]["Flex702"]);
const Flex702IoProps = useIoStore((state)=>state["Showcase"]["Flex702"]);
const Flex702Cb = useFlex702Cb()
const Flex703Props = useStore((state)=>state["Showcase"]["Flex703"]);
const Flex703IoProps = useIoStore((state)=>state["Showcase"]["Flex703"]);
const Flex703Cb = useFlex703Cb()
const Flex699Props = useStore((state)=>state["Showcase"]["Flex699"]);
const Flex699IoProps = useIoStore((state)=>state["Showcase"]["Flex699"]);
const Flex699Cb = useFlex699Cb()
const Flex692Props = useStore((state)=>state["Showcase"]["Flex692"]);
const Flex692IoProps = useIoStore((state)=>state["Showcase"]["Flex692"]);
const Flex692Cb = useFlex692Cb()
const Flex704Props = useStore((state)=>state["Showcase"]["Flex704"]);
const Flex704IoProps = useIoStore((state)=>state["Showcase"]["Flex704"]);
const Flex704Cb = useFlex704Cb()
const Flex700Props = useStore((state)=>state["Showcase"]["Flex700"]);
const Flex700IoProps = useIoStore((state)=>state["Showcase"]["Flex700"]);
const Flex700Cb = useFlex700Cb()
const Flex693Props = useStore((state)=>state["Showcase"]["Flex693"]);
const Flex693IoProps = useIoStore((state)=>state["Showcase"]["Flex693"]);
const Flex693Cb = useFlex693Cb()
const Flex687Props = useStore((state)=>state["Showcase"]["Flex687"]);
const Flex687IoProps = useIoStore((state)=>state["Showcase"]["Flex687"]);
const Flex687Cb = useFlex687Cb()
const Flex686Props = useStore((state)=>state["Showcase"]["Flex686"]);
const Flex686IoProps = useIoStore((state)=>state["Showcase"]["Flex686"]);
const Flex686Cb = useFlex686Cb()
const Flex685Props = useStore((state)=>state["Showcase"]["Flex685"]);
const Flex685IoProps = useIoStore((state)=>state["Showcase"]["Flex685"]);
const Flex685Cb = useFlex685Cb()
const Flex694Props = useStore((state)=>state["Showcase"]["Flex694"]);
const Flex694IoProps = useIoStore((state)=>state["Showcase"]["Flex694"]);
const Flex694Cb = useFlex694Cb()
const Flex701Props = useStore((state)=>state["Showcase"]["Flex701"]);
const Flex701IoProps = useIoStore((state)=>state["Showcase"]["Flex701"]);
const Flex701Cb = useFlex701Cb()
const Flex695Props = useStore((state)=>state["Showcase"]["Flex695"]);
const Flex695IoProps = useIoStore((state)=>state["Showcase"]["Flex695"]);
const Flex695Cb = useFlex695Cb()
const Flex688Props = useStore((state)=>state["Showcase"]["Flex688"]);
const Flex688IoProps = useIoStore((state)=>state["Showcase"]["Flex688"]);
const Flex688Cb = useFlex688Cb()
const Flex696Props = useStore((state)=>state["Showcase"]["Flex696"]);
const Flex696IoProps = useIoStore((state)=>state["Showcase"]["Flex696"]);
const Flex696Cb = useFlex696Cb()
const Flex689Props = useStore((state)=>state["Showcase"]["Flex689"]);
const Flex689IoProps = useIoStore((state)=>state["Showcase"]["Flex689"]);
const Flex689Cb = useFlex689Cb()
const Flex697Props = useStore((state)=>state["Showcase"]["Flex697"]);
const Flex697IoProps = useIoStore((state)=>state["Showcase"]["Flex697"]);
const Flex697Cb = useFlex697Cb()
const Flex690Props = useStore((state)=>state["Showcase"]["Flex690"]);
const Flex690IoProps = useIoStore((state)=>state["Showcase"]["Flex690"]);
const Flex690Cb = useFlex690Cb()
const Flex698Props = useStore((state)=>state["Showcase"]["Flex698"]);
const Flex698IoProps = useIoStore((state)=>state["Showcase"]["Flex698"]);
const Flex698Cb = useFlex698Cb()
const Flex691Props = useStore((state)=>state["Showcase"]["Flex691"]);
const Flex691IoProps = useIoStore((state)=>state["Showcase"]["Flex691"]);
const Flex691Cb = useFlex691Cb()
const TextBox361Props = useStore((state)=>state["Showcase"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["Showcase"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox362Props = useStore((state)=>state["Showcase"]["TextBox362"]);
const TextBox362IoProps = useIoStore((state)=>state["Showcase"]["TextBox362"]);
const TextBox362Cb = useTextBox362Cb()
const Button116Props = useStore((state)=>state["Showcase"]["Button116"]);
const Button116IoProps = useIoStore((state)=>state["Showcase"]["Button116"]);
const Button116Cb = useButton116Cb()
const Button235Props = useStore((state)=>state["Showcase"]["Button235"]);
const Button235IoProps = useIoStore((state)=>state["Showcase"]["Button235"]);
const Button235Cb = useButton235Cb()
const TextBox499Props = useStore((state)=>state["Showcase"]["TextBox499"]);
const TextBox499IoProps = useIoStore((state)=>state["Showcase"]["TextBox499"]);
const TextBox499Cb = useTextBox499Cb()
const Input19Props = useStore((state)=>state["Showcase"]["Input19"]);
const Input19IoProps = useIoStore((state)=>state["Showcase"]["Input19"]);
const Input19Cb = useInput19Cb()
const Input20Props = useStore((state)=>state["Showcase"]["Input20"]);
const Input20IoProps = useIoStore((state)=>state["Showcase"]["Input20"]);
const Input20Cb = useInput20Cb()
const TextBox500Props = useStore((state)=>state["Showcase"]["TextBox500"]);
const TextBox500IoProps = useIoStore((state)=>state["Showcase"]["TextBox500"]);
const TextBox500Cb = useTextBox500Cb()
const TextBox501Props = useStore((state)=>state["Showcase"]["TextBox501"]);
const TextBox501IoProps = useIoStore((state)=>state["Showcase"]["TextBox501"]);
const TextBox501Cb = useTextBox501Cb()
const Input21Props = useStore((state)=>state["Showcase"]["Input21"]);
const Input21IoProps = useIoStore((state)=>state["Showcase"]["Input21"]);
const Input21Cb = useInput21Cb()
const Input22Props = useStore((state)=>state["Showcase"]["Input22"]);
const Input22IoProps = useIoStore((state)=>state["Showcase"]["Input22"]);
const Input22Cb = useInput22Cb()
const TextBox502Props = useStore((state)=>state["Showcase"]["TextBox502"]);
const TextBox502IoProps = useIoStore((state)=>state["Showcase"]["TextBox502"]);
const TextBox502Cb = useTextBox502Cb()
const TextBox503Props = useStore((state)=>state["Showcase"]["TextBox503"]);
const TextBox503IoProps = useIoStore((state)=>state["Showcase"]["TextBox503"]);
const TextBox503Cb = useTextBox503Cb()
const Input23Props = useStore((state)=>state["Showcase"]["Input23"]);
const Input23IoProps = useIoStore((state)=>state["Showcase"]["Input23"]);
const Input23Cb = useInput23Cb()
const TextBox504Props = useStore((state)=>state["Showcase"]["TextBox504"]);
const TextBox504IoProps = useIoStore((state)=>state["Showcase"]["TextBox504"]);
const TextBox504Cb = useTextBox504Cb()
const Input24Props = useStore((state)=>state["Showcase"]["Input24"]);
const Input24IoProps = useIoStore((state)=>state["Showcase"]["Input24"]);
const Input24Cb = useInput24Cb()
const TextBox505Props = useStore((state)=>state["Showcase"]["TextBox505"]);
const TextBox505IoProps = useIoStore((state)=>state["Showcase"]["TextBox505"]);
const TextBox505Cb = useTextBox505Cb()
const Upload3Props = useStore((state)=>state["Showcase"]["Upload3"]);
const Upload3IoProps = useIoStore((state)=>state["Showcase"]["Upload3"]);
const Upload3Cb = useUpload3Cb()
const TextBox506Props = useStore((state)=>state["Showcase"]["TextBox506"]);
const TextBox506IoProps = useIoStore((state)=>state["Showcase"]["TextBox506"]);
const TextBox506Cb = useTextBox506Cb()
const Upload4Props = useStore((state)=>state["Showcase"]["Upload4"]);
const Upload4IoProps = useIoStore((state)=>state["Showcase"]["Upload4"]);
const Upload4Cb = useUpload4Cb()
const TextBox507Props = useStore((state)=>state["Showcase"]["TextBox507"]);
const TextBox507IoProps = useIoStore((state)=>state["Showcase"]["TextBox507"]);
const TextBox507Cb = useTextBox507Cb()
const Image319Props = useStore((state)=>state["Showcase"]["Image319"]);
const Image319IoProps = useIoStore((state)=>state["Showcase"]["Image319"]);
const Image319Cb = useImage319Cb()
const Image318Props = useStore((state)=>state["Showcase"]["Image318"]);
const Image318IoProps = useIoStore((state)=>state["Showcase"]["Image318"]);
const Image318Cb = useImage318Cb()
const TextBox497Props = useStore((state)=>state["Showcase"]["TextBox497"]);
const TextBox497IoProps = useIoStore((state)=>state["Showcase"]["TextBox497"]);
const TextBox497Cb = useTextBox497Cb()
const TextBox498Props = useStore((state)=>state["Showcase"]["TextBox498"]);
const TextBox498IoProps = useIoStore((state)=>state["Showcase"]["TextBox498"]);
const TextBox498Cb = useTextBox498Cb()
const Tag_1Props = useStore((state)=>state["Showcase"]["Tag_1"]);
const Tag_1IoProps = useIoStore((state)=>state["Showcase"]["Tag_1"]);
const Tag_1Cb = useTag_1Cb()
const Tag_2Props = useStore((state)=>state["Showcase"]["Tag_2"]);
const Tag_2IoProps = useIoStore((state)=>state["Showcase"]["Tag_2"]);
const Tag_2Cb = useTag_2Cb()
const Tag_3Props = useStore((state)=>state["Showcase"]["Tag_3"]);
const Tag_3IoProps = useIoStore((state)=>state["Showcase"]["Tag_3"]);
const Tag_3Cb = useTag_3Cb()
const Image315Props = useStore((state)=>state["Showcase"]["Image315"]);
const Image315IoProps = useIoStore((state)=>state["Showcase"]["Image315"]);
const Image315Cb = useImage315Cb()
const Image316Props = useStore((state)=>state["Showcase"]["Image316"]);
const Image316IoProps = useIoStore((state)=>state["Showcase"]["Image316"]);
const Image316Cb = useImage316Cb()
const Image317Props = useStore((state)=>state["Showcase"]["Image317"]);
const Image317IoProps = useIoStore((state)=>state["Showcase"]["Image317"]);
const Image317Cb = useImage317Cb()
const TextBox496Props = useStore((state)=>state["Showcase"]["TextBox496"]);
const TextBox496IoProps = useIoStore((state)=>state["Showcase"]["TextBox496"]);
const TextBox496Cb = useTextBox496Cb()
const TextBox363Props = useStore((state)=>state["Showcase"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["Showcase"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox364Props = useStore((state)=>state["Showcase"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["Showcase"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const Filter_Btn_1Props = useStore((state)=>state["Showcase"]["Filter_Btn_1"]);
const Filter_Btn_1IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_1"]);
const Filter_Btn_1Cb = useFilter_Btn_1Cb()
const Filter_Btn_2Props = useStore((state)=>state["Showcase"]["Filter_Btn_2"]);
const Filter_Btn_2IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_2"]);
const Filter_Btn_2Cb = useFilter_Btn_2Cb()
const Filter_Btn_3Props = useStore((state)=>state["Showcase"]["Filter_Btn_3"]);
const Filter_Btn_3IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_3"]);
const Filter_Btn_3Cb = useFilter_Btn_3Cb()
const Filter_Btn_4Props = useStore((state)=>state["Showcase"]["Filter_Btn_4"]);
const Filter_Btn_4IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_4"]);
const Filter_Btn_4Cb = useFilter_Btn_4Cb()
const Filter_Btn_5Props = useStore((state)=>state["Showcase"]["Filter_Btn_5"]);
const Filter_Btn_5IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_5"]);
const Filter_Btn_5Cb = useFilter_Btn_5Cb()
const Filter_Btn_6Props = useStore((state)=>state["Showcase"]["Filter_Btn_6"]);
const Filter_Btn_6IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_6"]);
const Filter_Btn_6Cb = useFilter_Btn_6Cb()
const Filter_Btn_7Props = useStore((state)=>state["Showcase"]["Filter_Btn_7"]);
const Filter_Btn_7IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_7"]);
const Filter_Btn_7Cb = useFilter_Btn_7Cb()
const Filter_Btn_8Props = useStore((state)=>state["Showcase"]["Filter_Btn_8"]);
const Filter_Btn_8IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_8"]);
const Filter_Btn_8Cb = useFilter_Btn_8Cb()
const Filter_Btn_9Props = useStore((state)=>state["Showcase"]["Filter_Btn_9"]);
const Filter_Btn_9IoProps = useIoStore((state)=>state["Showcase"]["Filter_Btn_9"]);
const Filter_Btn_9Cb = useFilter_Btn_9Cb()
const Card_Image_1Props = useStore((state)=>state["Showcase"]["Card_Image_1"]);
const Card_Image_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_1"]);
const Card_Image_1Cb = useCard_Image_1Cb()
const Card_Title_1Props = useStore((state)=>state["Showcase"]["Card_Title_1"]);
const Card_Title_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_1"]);
const Card_Title_1Cb = useCard_Title_1Cb()
const Card_Text_1Props = useStore((state)=>state["Showcase"]["Card_Text_1"]);
const Card_Text_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_1"]);
const Card_Text_1Cb = useCard_Text_1Cb()
const Card_Tag_1_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_1_a_Text"]);
const Card_Tag_1_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_a_Text"]);
const Card_Tag_1_a_TextCb = useCard_Tag_1_a_TextCb()
const Card_Tag_1_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_1_b_Text"]);
const Card_Tag_1_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_b_Text"]);
const Card_Tag_1_b_TextCb = useCard_Tag_1_b_TextCb()
const Card_Tag_1_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_1_c_Text"]);
const Card_Tag_1_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_1_c_Text"]);
const Card_Tag_1_c_TextCb = useCard_Tag_1_c_TextCb()
const Card_Github_1Props = useStore((state)=>state["Showcase"]["Card_Github_1"]);
const Card_Github_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_1"]);
const Card_Github_1Cb = useCard_Github_1Cb()
const Card_Deploy_1Props = useStore((state)=>state["Showcase"]["Card_Deploy_1"]);
const Card_Deploy_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_1"]);
const Card_Deploy_1Cb = useCard_Deploy_1Cb()
const Card_Creator_Image_1Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_1"]);
const Card_Creator_Image_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_1"]);
const Card_Creator_Image_1Cb = useCard_Creator_Image_1Cb()
const Card_Creator_Name_1Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_1"]);
const Card_Creator_Name_1IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_1"]);
const Card_Creator_Name_1Cb = useCard_Creator_Name_1Cb()
const Card_Image_2Props = useStore((state)=>state["Showcase"]["Card_Image_2"]);
const Card_Image_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_2"]);
const Card_Image_2Cb = useCard_Image_2Cb()
const Card_Creator_Name_2Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_2"]);
const Card_Creator_Name_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_2"]);
const Card_Creator_Name_2Cb = useCard_Creator_Name_2Cb()
const Card_Creator_Image_2Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_2"]);
const Card_Creator_Image_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_2"]);
const Card_Creator_Image_2Cb = useCard_Creator_Image_2Cb()
const Card_Deploy_2Props = useStore((state)=>state["Showcase"]["Card_Deploy_2"]);
const Card_Deploy_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_2"]);
const Card_Deploy_2Cb = useCard_Deploy_2Cb()
const Card_Github_2Props = useStore((state)=>state["Showcase"]["Card_Github_2"]);
const Card_Github_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_2"]);
const Card_Github_2Cb = useCard_Github_2Cb()
const Card_Text_2Props = useStore((state)=>state["Showcase"]["Card_Text_2"]);
const Card_Text_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_2"]);
const Card_Text_2Cb = useCard_Text_2Cb()
const Card_Title_2Props = useStore((state)=>state["Showcase"]["Card_Title_2"]);
const Card_Title_2IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_2"]);
const Card_Title_2Cb = useCard_Title_2Cb()
const Card_Tag_2_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_2_c_Text"]);
const Card_Tag_2_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_c_Text"]);
const Card_Tag_2_c_TextCb = useCard_Tag_2_c_TextCb()
const Card_Tag_2_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_2_b_Text"]);
const Card_Tag_2_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_b_Text"]);
const Card_Tag_2_b_TextCb = useCard_Tag_2_b_TextCb()
const Card_Tag_2_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_2_a_Text"]);
const Card_Tag_2_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_2_a_Text"]);
const Card_Tag_2_a_TextCb = useCard_Tag_2_a_TextCb()
const Card_Image_3Props = useStore((state)=>state["Showcase"]["Card_Image_3"]);
const Card_Image_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_3"]);
const Card_Image_3Cb = useCard_Image_3Cb()
const Card_Title_3Props = useStore((state)=>state["Showcase"]["Card_Title_3"]);
const Card_Title_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_3"]);
const Card_Title_3Cb = useCard_Title_3Cb()
const Card_Text_3Props = useStore((state)=>state["Showcase"]["Card_Text_3"]);
const Card_Text_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_3"]);
const Card_Text_3Cb = useCard_Text_3Cb()
const Card_Github_3Props = useStore((state)=>state["Showcase"]["Card_Github_3"]);
const Card_Github_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_3"]);
const Card_Github_3Cb = useCard_Github_3Cb()
const Card_Deploy_3Props = useStore((state)=>state["Showcase"]["Card_Deploy_3"]);
const Card_Deploy_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_3"]);
const Card_Deploy_3Cb = useCard_Deploy_3Cb()
const Card_Creator_Image_3Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_3"]);
const Card_Creator_Image_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_3"]);
const Card_Creator_Image_3Cb = useCard_Creator_Image_3Cb()
const Card_Creator_Name_3Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_3"]);
const Card_Creator_Name_3IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_3"]);
const Card_Creator_Name_3Cb = useCard_Creator_Name_3Cb()
const Card_Tag_3_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_3_c_Text"]);
const Card_Tag_3_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_c_Text"]);
const Card_Tag_3_c_TextCb = useCard_Tag_3_c_TextCb()
const Card_Tag_3_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_3_b_Text"]);
const Card_Tag_3_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_b_Text"]);
const Card_Tag_3_b_TextCb = useCard_Tag_3_b_TextCb()
const Card_Tag_3_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_3_a_Text"]);
const Card_Tag_3_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_3_a_Text"]);
const Card_Tag_3_a_TextCb = useCard_Tag_3_a_TextCb()
const Card_Image_6Props = useStore((state)=>state["Showcase"]["Card_Image_6"]);
const Card_Image_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_6"]);
const Card_Image_6Cb = useCard_Image_6Cb()
const Card_Creator_Name_6Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_6"]);
const Card_Creator_Name_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_6"]);
const Card_Creator_Name_6Cb = useCard_Creator_Name_6Cb()
const Card_Creator_Image_6Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_6"]);
const Card_Creator_Image_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_6"]);
const Card_Creator_Image_6Cb = useCard_Creator_Image_6Cb()
const Card_Deploy_6Props = useStore((state)=>state["Showcase"]["Card_Deploy_6"]);
const Card_Deploy_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_6"]);
const Card_Deploy_6Cb = useCard_Deploy_6Cb()
const Card_Github_6Props = useStore((state)=>state["Showcase"]["Card_Github_6"]);
const Card_Github_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_6"]);
const Card_Github_6Cb = useCard_Github_6Cb()
const Card_Text_6Props = useStore((state)=>state["Showcase"]["Card_Text_6"]);
const Card_Text_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_6"]);
const Card_Text_6Cb = useCard_Text_6Cb()
const Card_Title_6Props = useStore((state)=>state["Showcase"]["Card_Title_6"]);
const Card_Title_6IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_6"]);
const Card_Title_6Cb = useCard_Title_6Cb()
const Card_Tag_6_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_6_c_Text"]);
const Card_Tag_6_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_c_Text"]);
const Card_Tag_6_c_TextCb = useCard_Tag_6_c_TextCb()
const Card_Tag_6_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_6_b_Text"]);
const Card_Tag_6_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_b_Text"]);
const Card_Tag_6_b_TextCb = useCard_Tag_6_b_TextCb()
const Card_Tag_6_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_6_a_Text"]);
const Card_Tag_6_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_6_a_Text"]);
const Card_Tag_6_a_TextCb = useCard_Tag_6_a_TextCb()
const Card_Image_5Props = useStore((state)=>state["Showcase"]["Card_Image_5"]);
const Card_Image_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_5"]);
const Card_Image_5Cb = useCard_Image_5Cb()
const Card_Title_5Props = useStore((state)=>state["Showcase"]["Card_Title_5"]);
const Card_Title_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_5"]);
const Card_Title_5Cb = useCard_Title_5Cb()
const Card_Text_5Props = useStore((state)=>state["Showcase"]["Card_Text_5"]);
const Card_Text_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_5"]);
const Card_Text_5Cb = useCard_Text_5Cb()
const Card_Github_5Props = useStore((state)=>state["Showcase"]["Card_Github_5"]);
const Card_Github_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_5"]);
const Card_Github_5Cb = useCard_Github_5Cb()
const Card_Deploy_5Props = useStore((state)=>state["Showcase"]["Card_Deploy_5"]);
const Card_Deploy_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_5"]);
const Card_Deploy_5Cb = useCard_Deploy_5Cb()
const Card_Creator_Image_5Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_5"]);
const Card_Creator_Image_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_5"]);
const Card_Creator_Image_5Cb = useCard_Creator_Image_5Cb()
const Card_Creator_Name_5Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_5"]);
const Card_Creator_Name_5IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_5"]);
const Card_Creator_Name_5Cb = useCard_Creator_Name_5Cb()
const Card_Tag_5_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_5_c_Text"]);
const Card_Tag_5_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_c_Text"]);
const Card_Tag_5_c_TextCb = useCard_Tag_5_c_TextCb()
const Card_Tag_5_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_5_b_Text"]);
const Card_Tag_5_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_b_Text"]);
const Card_Tag_5_b_TextCb = useCard_Tag_5_b_TextCb()
const Card_Tag_5_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_5_a_Text"]);
const Card_Tag_5_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_5_a_Text"]);
const Card_Tag_5_a_TextCb = useCard_Tag_5_a_TextCb()
const Card_Image_4Props = useStore((state)=>state["Showcase"]["Card_Image_4"]);
const Card_Image_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Image_4"]);
const Card_Image_4Cb = useCard_Image_4Cb()
const Card_Creator_Name_4Props = useStore((state)=>state["Showcase"]["Card_Creator_Name_4"]);
const Card_Creator_Name_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Name_4"]);
const Card_Creator_Name_4Cb = useCard_Creator_Name_4Cb()
const Card_Creator_Image_4Props = useStore((state)=>state["Showcase"]["Card_Creator_Image_4"]);
const Card_Creator_Image_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Creator_Image_4"]);
const Card_Creator_Image_4Cb = useCard_Creator_Image_4Cb()
const Card_Deploy_4Props = useStore((state)=>state["Showcase"]["Card_Deploy_4"]);
const Card_Deploy_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Deploy_4"]);
const Card_Deploy_4Cb = useCard_Deploy_4Cb()
const Card_Github_4Props = useStore((state)=>state["Showcase"]["Card_Github_4"]);
const Card_Github_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Github_4"]);
const Card_Github_4Cb = useCard_Github_4Cb()
const Card_Text_4Props = useStore((state)=>state["Showcase"]["Card_Text_4"]);
const Card_Text_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Text_4"]);
const Card_Text_4Cb = useCard_Text_4Cb()
const Card_Title_4Props = useStore((state)=>state["Showcase"]["Card_Title_4"]);
const Card_Title_4IoProps = useIoStore((state)=>state["Showcase"]["Card_Title_4"]);
const Card_Title_4Cb = useCard_Title_4Cb()
const Card_Tag_4_c_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_4_c_Text"]);
const Card_Tag_4_c_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_c_Text"]);
const Card_Tag_4_c_TextCb = useCard_Tag_4_c_TextCb()
const Card_Tag_4_b_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_4_b_Text"]);
const Card_Tag_4_b_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_b_Text"]);
const Card_Tag_4_b_TextCb = useCard_Tag_4_b_TextCb()
const Card_Tag_4_a_TextProps = useStore((state)=>state["Showcase"]["Card_Tag_4_a_Text"]);
const Card_Tag_4_a_TextIoProps = useIoStore((state)=>state["Showcase"]["Card_Tag_4_a_Text"]);
const Card_Tag_4_a_TextCb = useCard_Tag_4_a_TextCb()
const Image303Props = useStore((state)=>state["Showcase"]["Image303"]);
const Image303IoProps = useIoStore((state)=>state["Showcase"]["Image303"]);
const Image303Cb = useImage303Cb()
const Image304Props = useStore((state)=>state["Showcase"]["Image304"]);
const Image304IoProps = useIoStore((state)=>state["Showcase"]["Image304"]);
const Image304Cb = useImage304Cb()
const TextBox474Props = useStore((state)=>state["Showcase"]["TextBox474"]);
const TextBox474IoProps = useIoStore((state)=>state["Showcase"]["TextBox474"]);
const TextBox474Cb = useTextBox474Cb()
const TextBox453Props = useStore((state)=>state["Showcase"]["TextBox453"]);
const TextBox453IoProps = useIoStore((state)=>state["Showcase"]["TextBox453"]);
const TextBox453Cb = useTextBox453Cb()
const Image278Props = useStore((state)=>state["Showcase"]["Image278"]);
const Image278IoProps = useIoStore((state)=>state["Showcase"]["Image278"]);
const Image278Cb = useImage278Cb()
const TextBox430Props = useStore((state)=>state["Showcase"]["TextBox430"]);
const TextBox430IoProps = useIoStore((state)=>state["Showcase"]["TextBox430"]);
const TextBox430Cb = useTextBox430Cb()
const TextBox431Props = useStore((state)=>state["Showcase"]["TextBox431"]);
const TextBox431IoProps = useIoStore((state)=>state["Showcase"]["TextBox431"]);
const TextBox431Cb = useTextBox431Cb()
const Button200Props = useStore((state)=>state["Showcase"]["Button200"]);
const Button200IoProps = useIoStore((state)=>state["Showcase"]["Button200"]);
const Button200Cb = useButton200Cb()
const TextBox438Props = useStore((state)=>state["Showcase"]["TextBox438"]);
const TextBox438IoProps = useIoStore((state)=>state["Showcase"]["TextBox438"]);
const TextBox438Cb = useTextBox438Cb()
const Image279Props = useStore((state)=>state["Showcase"]["Image279"]);
const Image279IoProps = useIoStore((state)=>state["Showcase"]["Image279"]);
const Image279Cb = useImage279Cb()
const TextBox448Props = useStore((state)=>state["Showcase"]["TextBox448"]);
const TextBox448IoProps = useIoStore((state)=>state["Showcase"]["TextBox448"]);
const TextBox448Cb = useTextBox448Cb()
const TextBox449Props = useStore((state)=>state["Showcase"]["TextBox449"]);
const TextBox449IoProps = useIoStore((state)=>state["Showcase"]["TextBox449"]);
const TextBox449Cb = useTextBox449Cb()
const TextBox450Props = useStore((state)=>state["Showcase"]["TextBox450"]);
const TextBox450IoProps = useIoStore((state)=>state["Showcase"]["TextBox450"]);
const TextBox450Cb = useTextBox450Cb()
const TextBox451Props = useStore((state)=>state["Showcase"]["TextBox451"]);
const TextBox451IoProps = useIoStore((state)=>state["Showcase"]["TextBox451"]);
const TextBox451Cb = useTextBox451Cb()
const Image300Props = useStore((state)=>state["Showcase"]["Image300"]);
const Image300IoProps = useIoStore((state)=>state["Showcase"]["Image300"]);
const Image300Cb = useImage300Cb()
const TextBox472Props = useStore((state)=>state["Showcase"]["TextBox472"]);
const TextBox472IoProps = useIoStore((state)=>state["Showcase"]["TextBox472"]);
const TextBox472Cb = useTextBox472Cb()
const TextBox466Props = useStore((state)=>state["Showcase"]["TextBox466"]);
const TextBox466IoProps = useIoStore((state)=>state["Showcase"]["TextBox466"]);
const TextBox466Cb = useTextBox466Cb()
const TextBox467Props = useStore((state)=>state["Showcase"]["TextBox467"]);
const TextBox467IoProps = useIoStore((state)=>state["Showcase"]["TextBox467"]);
const TextBox467Cb = useTextBox467Cb()
const TextBox456Props = useStore((state)=>state["Showcase"]["TextBox456"]);
const TextBox456IoProps = useIoStore((state)=>state["Showcase"]["TextBox456"]);
const TextBox456Cb = useTextBox456Cb()
const Image295Props = useStore((state)=>state["Showcase"]["Image295"]);
const Image295IoProps = useIoStore((state)=>state["Showcase"]["Image295"]);
const Image295Cb = useImage295Cb()
const TextBox455Props = useStore((state)=>state["Showcase"]["TextBox455"]);
const TextBox455IoProps = useIoStore((state)=>state["Showcase"]["TextBox455"]);
const TextBox455Cb = useTextBox455Cb()
const Image294Props = useStore((state)=>state["Showcase"]["Image294"]);
const Image294IoProps = useIoStore((state)=>state["Showcase"]["Image294"]);
const Image294Cb = useImage294Cb()
const Image296Props = useStore((state)=>state["Showcase"]["Image296"]);
const Image296IoProps = useIoStore((state)=>state["Showcase"]["Image296"]);
const Image296Cb = useImage296Cb()
const Image297Props = useStore((state)=>state["Showcase"]["Image297"]);
const Image297IoProps = useIoStore((state)=>state["Showcase"]["Image297"]);
const Image297Cb = useImage297Cb()
const Image298Props = useStore((state)=>state["Showcase"]["Image298"]);
const Image298IoProps = useIoStore((state)=>state["Showcase"]["Image298"]);
const Image298Cb = useImage298Cb()
const Image299Props = useStore((state)=>state["Showcase"]["Image299"]);
const Image299IoProps = useIoStore((state)=>state["Showcase"]["Image299"]);
const Image299Cb = useImage299Cb()
const TextBox468Props = useStore((state)=>state["Showcase"]["TextBox468"]);
const TextBox468IoProps = useIoStore((state)=>state["Showcase"]["TextBox468"]);
const TextBox468Cb = useTextBox468Cb()
const TextBox457Props = useStore((state)=>state["Showcase"]["TextBox457"]);
const TextBox457IoProps = useIoStore((state)=>state["Showcase"]["TextBox457"]);
const TextBox457Cb = useTextBox457Cb()
const TextBox469Props = useStore((state)=>state["Showcase"]["TextBox469"]);
const TextBox469IoProps = useIoStore((state)=>state["Showcase"]["TextBox469"]);
const TextBox469Cb = useTextBox469Cb()
const TextBox458Props = useStore((state)=>state["Showcase"]["TextBox458"]);
const TextBox458IoProps = useIoStore((state)=>state["Showcase"]["TextBox458"]);
const TextBox458Cb = useTextBox458Cb()
const TextBox459Props = useStore((state)=>state["Showcase"]["TextBox459"]);
const TextBox459IoProps = useIoStore((state)=>state["Showcase"]["TextBox459"]);
const TextBox459Cb = useTextBox459Cb()
const TextBox460Props = useStore((state)=>state["Showcase"]["TextBox460"]);
const TextBox460IoProps = useIoStore((state)=>state["Showcase"]["TextBox460"]);
const TextBox460Cb = useTextBox460Cb()
const TextBox470Props = useStore((state)=>state["Showcase"]["TextBox470"]);
const TextBox470IoProps = useIoStore((state)=>state["Showcase"]["TextBox470"]);
const TextBox470Cb = useTextBox470Cb()
const TextBox461Props = useStore((state)=>state["Showcase"]["TextBox461"]);
const TextBox461IoProps = useIoStore((state)=>state["Showcase"]["TextBox461"]);
const TextBox461Cb = useTextBox461Cb()
const TextBox462Props = useStore((state)=>state["Showcase"]["TextBox462"]);
const TextBox462IoProps = useIoStore((state)=>state["Showcase"]["TextBox462"]);
const TextBox462Cb = useTextBox462Cb()
const TextBox463Props = useStore((state)=>state["Showcase"]["TextBox463"]);
const TextBox463IoProps = useIoStore((state)=>state["Showcase"]["TextBox463"]);
const TextBox463Cb = useTextBox463Cb()
const TextBox471Props = useStore((state)=>state["Showcase"]["TextBox471"]);
const TextBox471IoProps = useIoStore((state)=>state["Showcase"]["TextBox471"]);
const TextBox471Cb = useTextBox471Cb()
const TextBox464Props = useStore((state)=>state["Showcase"]["TextBox464"]);
const TextBox464IoProps = useIoStore((state)=>state["Showcase"]["TextBox464"]);
const TextBox464Cb = useTextBox464Cb()
const TextBox465Props = useStore((state)=>state["Showcase"]["TextBox465"]);
const TextBox465IoProps = useIoStore((state)=>state["Showcase"]["TextBox465"]);
const TextBox465Cb = useTextBox465Cb()

  return (<>
  <Flex2 className="p-Showcase Flex624 bpt" {...Flex624Props} {...Flex624Cb} {...Flex624IoProps}>
<Flex2 className="p-Showcase Flex623 bpt" {...Flex623Props} {...Flex623Cb} {...Flex623IoProps}>
<Image2 className="p-Showcase Image279 bpt" {...Image279Props} {...Image279Cb} {...Image279IoProps}/>
<TextBox2 className="p-Showcase TextBox438 bpt" {...TextBox438Props} {...TextBox438Cb} {...TextBox438IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex647 bpt" {...Flex647Props} {...Flex647Cb} {...Flex647IoProps}>
<TextBox2 className="p-Showcase TextBox451 bpt" {...TextBox451Props} {...TextBox451Cb} {...TextBox451IoProps}/>
<TextBox2 className="p-Showcase TextBox450 bpt" {...TextBox450Props} {...TextBox450Cb} {...TextBox450IoProps}/>
<TextBox2 className="p-Showcase TextBox448 bpt" {...TextBox448Props} {...TextBox448Cb} {...TextBox448IoProps}/>
<TextBox2 className="p-Showcase TextBox449 bpt" {...TextBox449Props} {...TextBox449Cb} {...TextBox449IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex621 bpt" {...Flex621Props} {...Flex621Cb} {...Flex621IoProps}>
<Image2 className="p-Showcase Image278 bpt" {...Image278Props} {...Image278Cb} {...Image278IoProps}/>
<Flex2 className="p-Showcase Flex620 bpt" {...Flex620Props} {...Flex620Cb} {...Flex620IoProps}>
<Flex2 className="p-Showcase Flex619 bpt" {...Flex619Props} {...Flex619Cb} {...Flex619IoProps}>
<Button2 className="p-Showcase Button200 bpt" {...Button200Props} {...Button200Cb} {...Button200IoProps}/>
</Flex2>
<Menu2 className="p-Showcase Menu7 bpt" {...Menu7Props} {...Menu7Cb} {...Menu7IoProps}>
<Flex2 className="p-Showcase Flex618 bpt" {...Flex618Props} {...Flex618Cb} {...Flex618IoProps}>
<TextBox2 className="p-Showcase TextBox430 bpt" {...TextBox430Props} {...TextBox430Cb} {...TextBox430IoProps}/>
<TextBox2 className="p-Showcase TextBox431 bpt" {...TextBox431Props} {...TextBox431Cb} {...TextBox431IoProps}/>
</Flex2>
</Menu2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex462 bpt" {...Flex462Props} {...Flex462Cb} {...Flex462IoProps}>
<Overlay1 className="p-Showcase Overlay3 bpt" {...Overlay3Props} {...Overlay3Cb} {...Overlay3IoProps}>
<Flex2 className="p-Showcase Flex786 bpt" {...Flex786Props} {...Flex786Cb} {...Flex786IoProps}>
<Flex2 className="p-Showcase Flex784 bpt" {...Flex784Props} {...Flex784Cb} {...Flex784IoProps}>
<Flex2 className="p-Showcase Flex779 bpt" {...Flex779Props} {...Flex779Cb} {...Flex779IoProps}>
<Flex2 className="p-Showcase Flex770 bpt" {...Flex770Props} {...Flex770Cb} {...Flex770IoProps}>
<TextBox2 className="p-Showcase TextBox499 bpt" {...TextBox499Props} {...TextBox499Cb} {...TextBox499IoProps}/>
<Input2 className="p-Showcase Input19 bpt" {...Input19Props} {...Input19Cb} {...Input19IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex771 bpt" {...Flex771Props} {...Flex771Cb} {...Flex771IoProps}>
<TextBox2 className="p-Showcase TextBox500 bpt" {...TextBox500Props} {...TextBox500Cb} {...TextBox500IoProps}/>
<Input2 className="p-Showcase Input20 bpt" {...Input20Props} {...Input20Cb} {...Input20IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex780 bpt" {...Flex780Props} {...Flex780Cb} {...Flex780IoProps}>
<Flex2 className="p-Showcase Flex772 bpt" {...Flex772Props} {...Flex772Cb} {...Flex772IoProps}>
<TextBox2 className="p-Showcase TextBox501 bpt" {...TextBox501Props} {...TextBox501Cb} {...TextBox501IoProps}/>
<Input2 className="p-Showcase Input21 bpt" {...Input21Props} {...Input21Cb} {...Input21IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex773 bpt" {...Flex773Props} {...Flex773Cb} {...Flex773IoProps}>
<TextBox2 className="p-Showcase TextBox502 bpt" {...TextBox502Props} {...TextBox502Cb} {...TextBox502IoProps}/>
<Input2 className="p-Showcase Input22 bpt" {...Input22Props} {...Input22Cb} {...Input22IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex781 bpt" {...Flex781Props} {...Flex781Cb} {...Flex781IoProps}>
<Flex2 className="p-Showcase Flex774 bpt" {...Flex774Props} {...Flex774Cb} {...Flex774IoProps}>
<TextBox2 className="p-Showcase TextBox503 bpt" {...TextBox503Props} {...TextBox503Cb} {...TextBox503IoProps}/>
<Input2 className="p-Showcase Input23 bpt" {...Input23Props} {...Input23Cb} {...Input23IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex775 bpt" {...Flex775Props} {...Flex775Cb} {...Flex775IoProps}>
<TextBox2 className="p-Showcase TextBox505 bpt" {...TextBox505Props} {...TextBox505Cb} {...TextBox505IoProps}/>
<Input2 className="p-Showcase Input24 bpt" {...Input24Props} {...Input24Cb} {...Input24IoProps}/>
<TextBox2 className="p-Showcase TextBox504 bpt" {...TextBox504Props} {...TextBox504Cb} {...TextBox504IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex782 bpt" {...Flex782Props} {...Flex782Cb} {...Flex782IoProps}>
<Flex2 className="p-Showcase Flex776 bpt" {...Flex776Props} {...Flex776Cb} {...Flex776IoProps}>
<TextBox2 className="p-Showcase TextBox506 bpt" {...TextBox506Props} {...TextBox506Cb} {...TextBox506IoProps}/>
<Upload1 className="p-Showcase Upload3 bpt" {...Upload3Props} {...Upload3Cb} {...Upload3IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex777 bpt" {...Flex777Props} {...Flex777Cb} {...Flex777IoProps}>
<TextBox2 className="p-Showcase TextBox507 bpt" {...TextBox507Props} {...TextBox507Cb} {...TextBox507IoProps}/>
<Upload1 className="p-Showcase Upload4 bpt" {...Upload4Props} {...Upload4Cb} {...Upload4IoProps}/>
</Flex2>
</Flex2>
<Button2 className="p-Showcase Button235 bpt" {...Button235Props} {...Button235Cb} {...Button235IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex785 bpt" {...Flex785Props} {...Flex785Cb} {...Flex785IoProps}>
<Flex2 className="p-Showcase Flex783 bpt" {...Flex783Props} {...Flex783Cb} {...Flex783IoProps}>
<Image2 className="p-Showcase Image319 bpt" {...Image319Props} {...Image319Cb} {...Image319IoProps}/>
<Flex2 className="p-Showcase Flex778 bpt" {...Flex778Props} {...Flex778Cb} {...Flex778IoProps}>
<Image2 className="p-Showcase Image318 bpt" {...Image318Props} {...Image318Cb} {...Image318IoProps}/>
<Flex2 className="p-Showcase Flex769 bpt" {...Flex769Props} {...Flex769Cb} {...Flex769IoProps}>
<Flex2 className="p-Showcase Flex766 bpt" {...Flex766Props} {...Flex766Cb} {...Flex766IoProps}>
<TextBox2 className="p-Showcase TextBox497 bpt" {...TextBox497Props} {...TextBox497Cb} {...TextBox497IoProps}/>
<TextBox2 className="p-Showcase TextBox498 bpt" {...TextBox498Props} {...TextBox498Cb} {...TextBox498IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex767 bpt" {...Flex767Props} {...Flex767Cb} {...Flex767IoProps}>
<Flex2 className="p-Showcase Tag_Flex_1 bpt" {...Tag_Flex_1Props} {...Tag_Flex_1Cb} {...Tag_Flex_1IoProps}>
<Button2 className="p-Showcase Tag_1 bpt" {...Tag_1Props} {...Tag_1Cb} {...Tag_1IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Tag_Flex_2 bpt" {...Tag_Flex_2Props} {...Tag_Flex_2Cb} {...Tag_Flex_2IoProps}>
<Button2 className="p-Showcase Tag_2 bpt" {...Tag_2Props} {...Tag_2Cb} {...Tag_2IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Tag_Flex_3 bpt" {...Tag_Flex_3Props} {...Tag_Flex_3Cb} {...Tag_Flex_3IoProps}>
<Button2 className="p-Showcase Tag_3 bpt" {...Tag_3Props} {...Tag_3Cb} {...Tag_3IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex768 bpt" {...Flex768Props} {...Flex768Cb} {...Flex768IoProps}>
<Flex2 className="p-Showcase Flex765 bpt" {...Flex765Props} {...Flex765Cb} {...Flex765IoProps}>
<Image2 className="p-Showcase Image317 bpt" {...Image317Props} {...Image317Cb} {...Image317IoProps}/>
<TextBox2 className="p-Showcase TextBox496 bpt" {...TextBox496Props} {...TextBox496Cb} {...TextBox496IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex764 bpt" {...Flex764Props} {...Flex764Cb} {...Flex764IoProps}>
<Image2 className="p-Showcase Image315 bpt" {...Image315Props} {...Image315Cb} {...Image315IoProps}/>
<Image2 className="p-Showcase Image316 bpt" {...Image316Props} {...Image316Cb} {...Image316IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Overlay1>
<TextBox2 className="p-Showcase TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<TextBox2 className="p-Showcase TextBox362 bpt" {...TextBox362Props} {...TextBox362Cb} {...TextBox362IoProps}/>
<Button2 className="p-Showcase Button116 bpt" {...Button116Props} {...Button116Cb} {...Button116IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex463 bpt" {...Flex463Props} {...Flex463Cb} {...Flex463IoProps}>
<Flex2 className="p-Showcase Flex466 bpt" {...Flex466Props} {...Flex466Cb} {...Flex466IoProps}>
<TextBox2 className="p-Showcase TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
<TextBox2 className="p-Showcase TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex467 bpt" {...Flex467Props} {...Flex467Cb} {...Flex467IoProps}>
<Flex2 className="p-Showcase Filter1 bpt" {...Filter1Props} {...Filter1Cb} {...Filter1IoProps}>
<Button2 className="p-Showcase Filter_Btn_1 bpt" {...Filter_Btn_1Props} {...Filter_Btn_1Cb} {...Filter_Btn_1IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter2 bpt" {...Filter2Props} {...Filter2Cb} {...Filter2IoProps}>
<Button2 className="p-Showcase Filter_Btn_2 bpt" {...Filter_Btn_2Props} {...Filter_Btn_2Cb} {...Filter_Btn_2IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter3 bpt" {...Filter3Props} {...Filter3Cb} {...Filter3IoProps}>
<Button2 className="p-Showcase Filter_Btn_3 bpt" {...Filter_Btn_3Props} {...Filter_Btn_3Cb} {...Filter_Btn_3IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter4 bpt" {...Filter4Props} {...Filter4Cb} {...Filter4IoProps}>
<Button2 className="p-Showcase Filter_Btn_4 bpt" {...Filter_Btn_4Props} {...Filter_Btn_4Cb} {...Filter_Btn_4IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter5 bpt" {...Filter5Props} {...Filter5Cb} {...Filter5IoProps}>
<Button2 className="p-Showcase Filter_Btn_5 bpt" {...Filter_Btn_5Props} {...Filter_Btn_5Cb} {...Filter_Btn_5IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter6 bpt" {...Filter6Props} {...Filter6Cb} {...Filter6IoProps}>
<Button2 className="p-Showcase Filter_Btn_6 bpt" {...Filter_Btn_6Props} {...Filter_Btn_6Cb} {...Filter_Btn_6IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter7 bpt" {...Filter7Props} {...Filter7Cb} {...Filter7IoProps}>
<Button2 className="p-Showcase Filter_Btn_7 bpt" {...Filter_Btn_7Props} {...Filter_Btn_7Cb} {...Filter_Btn_7IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter8 bpt" {...Filter8Props} {...Filter8Cb} {...Filter8IoProps}>
<Button2 className="p-Showcase Filter_Btn_8 bpt" {...Filter_Btn_8Props} {...Filter_Btn_8Cb} {...Filter_Btn_8IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Filter9 bpt" {...Filter9Props} {...Filter9Cb} {...Filter9IoProps}>
<Button2 className="p-Showcase Filter_Btn_9 bpt" {...Filter_Btn_9Props} {...Filter_Btn_9Cb} {...Filter_Btn_9IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex468 bpt" {...Flex468Props} {...Flex468Cb} {...Flex468IoProps}>
<Flex2 className="p-Showcase Flex469 bpt" {...Flex469Props} {...Flex469Cb} {...Flex469IoProps}>
<Flex2 className="p-Showcase Card_1 bpt" {...Card_1Props} {...Card_1Cb} {...Card_1IoProps}>
<Image2 className="p-Showcase Card_Image_1 bpt" {...Card_Image_1Props} {...Card_Image_1Cb} {...Card_Image_1IoProps}/>
<Flex2 className="p-Showcase Flex481 bpt" {...Flex481Props} {...Flex481Cb} {...Flex481IoProps}>
<Flex2 className="p-Showcase Flex482 bpt" {...Flex482Props} {...Flex482Cb} {...Flex482IoProps}>
<TextBox2 className="p-Showcase Card_Title_1 bpt" {...Card_Title_1Props} {...Card_Title_1Cb} {...Card_Title_1IoProps}/>
<TextBox2 className="p-Showcase Card_Text_1 bpt" {...Card_Text_1Props} {...Card_Text_1Cb} {...Card_Text_1IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex483 bpt" {...Flex483Props} {...Flex483Cb} {...Flex483IoProps}>
<Flex2 className="p-Showcase Card_Tag_1_a bpt" {...Card_Tag_1_aProps} {...Card_Tag_1_aCb} {...Card_Tag_1_aIoProps}>
<Button2 className="p-Showcase Card_Tag_1_a_Text bpt" {...Card_Tag_1_a_TextProps} {...Card_Tag_1_a_TextCb} {...Card_Tag_1_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_1_b bpt" {...Card_Tag_1_bProps} {...Card_Tag_1_bCb} {...Card_Tag_1_bIoProps}>
<Button2 className="p-Showcase Card_Tag_1_b_Text bpt" {...Card_Tag_1_b_TextProps} {...Card_Tag_1_b_TextCb} {...Card_Tag_1_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_1_c bpt" {...Card_Tag_1_cProps} {...Card_Tag_1_cCb} {...Card_Tag_1_cIoProps}>
<Button2 className="p-Showcase Card_Tag_1_c_Text bpt" {...Card_Tag_1_c_TextProps} {...Card_Tag_1_c_TextCb} {...Card_Tag_1_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex484 bpt" {...Flex484Props} {...Flex484Cb} {...Flex484IoProps}>
<Flex2 className="p-Showcase Flex486 bpt" {...Flex486Props} {...Flex486Cb} {...Flex486IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_1 bpt" {...Card_Creator_Image_1Props} {...Card_Creator_Image_1Cb} {...Card_Creator_Image_1IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_1 bpt" {...Card_Creator_Name_1Props} {...Card_Creator_Name_1Cb} {...Card_Creator_Name_1IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex485 bpt" {...Flex485Props} {...Flex485Cb} {...Flex485IoProps}>
<Image2 className="p-Showcase Card_Github_1 bpt" {...Card_Github_1Props} {...Card_Github_1Cb} {...Card_Github_1IoProps}/>
<Image2 className="p-Showcase Card_Deploy_1 bpt" {...Card_Deploy_1Props} {...Card_Deploy_1Cb} {...Card_Deploy_1IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Card_2 bpt" {...Card_2Props} {...Card_2Cb} {...Card_2IoProps}>
<Image2 className="p-Showcase Card_Image_2 bpt" {...Card_Image_2Props} {...Card_Image_2Cb} {...Card_Image_2IoProps}/>
<Flex2 className="p-Showcase Flex528 bpt" {...Flex528Props} {...Flex528Cb} {...Flex528IoProps}>
<Flex2 className="p-Showcase Flex527 bpt" {...Flex527Props} {...Flex527Cb} {...Flex527IoProps}>
<TextBox2 className="p-Showcase Card_Title_2 bpt" {...Card_Title_2Props} {...Card_Title_2Cb} {...Card_Title_2IoProps}/>
<TextBox2 className="p-Showcase Card_Text_2 bpt" {...Card_Text_2Props} {...Card_Text_2Cb} {...Card_Text_2IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex657 bpt" {...Flex657Props} {...Flex657Cb} {...Flex657IoProps}>
<Flex2 className="p-Showcase Card_Tag_2_a bpt" {...Card_Tag_2_aProps} {...Card_Tag_2_aCb} {...Card_Tag_2_aIoProps}>
<Button2 className="p-Showcase Card_Tag_2_a_Text bpt" {...Card_Tag_2_a_TextProps} {...Card_Tag_2_a_TextCb} {...Card_Tag_2_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_2_b bpt" {...Card_Tag_2_bProps} {...Card_Tag_2_bCb} {...Card_Tag_2_bIoProps}>
<Button2 className="p-Showcase Card_Tag_2_b_Text bpt" {...Card_Tag_2_b_TextProps} {...Card_Tag_2_b_TextCb} {...Card_Tag_2_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_2_c bpt" {...Card_Tag_2_cProps} {...Card_Tag_2_cCb} {...Card_Tag_2_cIoProps}>
<Button2 className="p-Showcase Card_Tag_2_c_Text bpt" {...Card_Tag_2_c_TextProps} {...Card_Tag_2_c_TextCb} {...Card_Tag_2_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex525 bpt" {...Flex525Props} {...Flex525Cb} {...Flex525IoProps}>
<Flex2 className="p-Showcase Flex523 bpt" {...Flex523Props} {...Flex523Cb} {...Flex523IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_2 bpt" {...Card_Creator_Image_2Props} {...Card_Creator_Image_2Cb} {...Card_Creator_Image_2IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_2 bpt" {...Card_Creator_Name_2Props} {...Card_Creator_Name_2Cb} {...Card_Creator_Name_2IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex524 bpt" {...Flex524Props} {...Flex524Cb} {...Flex524IoProps}>
<Image2 className="p-Showcase Card_Github_2 bpt" {...Card_Github_2Props} {...Card_Github_2Cb} {...Card_Github_2IoProps}/>
<Image2 className="p-Showcase Card_Deploy_2 bpt" {...Card_Deploy_2Props} {...Card_Deploy_2Cb} {...Card_Deploy_2IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Card_3 bpt" {...Card_3Props} {...Card_3Cb} {...Card_3IoProps}>
<Image2 className="p-Showcase Card_Image_3 bpt" {...Card_Image_3Props} {...Card_Image_3Cb} {...Card_Image_3IoProps}/>
<Flex2 className="p-Showcase Flex535 bpt" {...Flex535Props} {...Flex535Cb} {...Flex535IoProps}>
<Flex2 className="p-Showcase Flex532 bpt" {...Flex532Props} {...Flex532Cb} {...Flex532IoProps}>
<TextBox2 className="p-Showcase Card_Title_3 bpt" {...Card_Title_3Props} {...Card_Title_3Cb} {...Card_Title_3IoProps}/>
<TextBox2 className="p-Showcase Card_Text_3 bpt" {...Card_Text_3Props} {...Card_Text_3Cb} {...Card_Text_3IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex661 bpt" {...Flex661Props} {...Flex661Cb} {...Flex661IoProps}>
<Flex2 className="p-Showcase Card_Tag_3_a bpt" {...Card_Tag_3_aProps} {...Card_Tag_3_aCb} {...Card_Tag_3_aIoProps}>
<Button2 className="p-Showcase Card_Tag_3_a_Text bpt" {...Card_Tag_3_a_TextProps} {...Card_Tag_3_a_TextCb} {...Card_Tag_3_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_3_b bpt" {...Card_Tag_3_bProps} {...Card_Tag_3_bCb} {...Card_Tag_3_bIoProps}>
<Button2 className="p-Showcase Card_Tag_3_b_Text bpt" {...Card_Tag_3_b_TextProps} {...Card_Tag_3_b_TextCb} {...Card_Tag_3_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_3_c bpt" {...Card_Tag_3_cProps} {...Card_Tag_3_cCb} {...Card_Tag_3_cIoProps}>
<Button2 className="p-Showcase Card_Tag_3_c_Text bpt" {...Card_Tag_3_c_TextProps} {...Card_Tag_3_c_TextCb} {...Card_Tag_3_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex534 bpt" {...Flex534Props} {...Flex534Cb} {...Flex534IoProps}>
<Flex2 className="p-Showcase Flex531 bpt" {...Flex531Props} {...Flex531Cb} {...Flex531IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_3 bpt" {...Card_Creator_Image_3Props} {...Card_Creator_Image_3Cb} {...Card_Creator_Image_3IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_3 bpt" {...Card_Creator_Name_3Props} {...Card_Creator_Name_3Cb} {...Card_Creator_Name_3IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex530 bpt" {...Flex530Props} {...Flex530Cb} {...Flex530IoProps}>
<Image2 className="p-Showcase Card_Github_3 bpt" {...Card_Github_3Props} {...Card_Github_3Cb} {...Card_Github_3IoProps}/>
<Image2 className="p-Showcase Card_Deploy_3 bpt" {...Card_Deploy_3Props} {...Card_Deploy_3Cb} {...Card_Deploy_3IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex646 bpt" {...Flex646Props} {...Flex646Cb} {...Flex646IoProps}>
<Flex2 className="p-Showcase Card_4 bpt" {...Card_4Props} {...Card_4Cb} {...Card_4IoProps}>
<Image2 className="p-Showcase Card_Image_4 bpt" {...Card_Image_4Props} {...Card_Image_4Cb} {...Card_Image_4IoProps}/>
<Flex2 className="p-Showcase Flex642 bpt" {...Flex642Props} {...Flex642Cb} {...Flex642IoProps}>
<Flex2 className="p-Showcase Flex639 bpt" {...Flex639Props} {...Flex639Cb} {...Flex639IoProps}>
<TextBox2 className="p-Showcase Card_Title_4 bpt" {...Card_Title_4Props} {...Card_Title_4Cb} {...Card_Title_4IoProps}/>
<TextBox2 className="p-Showcase Card_Text_4 bpt" {...Card_Text_4Props} {...Card_Text_4Cb} {...Card_Text_4IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex665 bpt" {...Flex665Props} {...Flex665Cb} {...Flex665IoProps}>
<Flex2 className="p-Showcase Card_Tag_4_a bpt" {...Card_Tag_4_aProps} {...Card_Tag_4_aCb} {...Card_Tag_4_aIoProps}>
<Button2 className="p-Showcase Card_Tag_4_a_Text bpt" {...Card_Tag_4_a_TextProps} {...Card_Tag_4_a_TextCb} {...Card_Tag_4_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_4_b bpt" {...Card_Tag_4_bProps} {...Card_Tag_4_bCb} {...Card_Tag_4_bIoProps}>
<Button2 className="p-Showcase Card_Tag_4_b_Text bpt" {...Card_Tag_4_b_TextProps} {...Card_Tag_4_b_TextCb} {...Card_Tag_4_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_4_c bpt" {...Card_Tag_4_cProps} {...Card_Tag_4_cCb} {...Card_Tag_4_cIoProps}>
<Button2 className="p-Showcase Card_Tag_4_c_Text bpt" {...Card_Tag_4_c_TextProps} {...Card_Tag_4_c_TextCb} {...Card_Tag_4_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex637 bpt" {...Flex637Props} {...Flex637Cb} {...Flex637IoProps}>
<Flex2 className="p-Showcase Flex629 bpt" {...Flex629Props} {...Flex629Cb} {...Flex629IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_4 bpt" {...Card_Creator_Image_4Props} {...Card_Creator_Image_4Cb} {...Card_Creator_Image_4IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_4 bpt" {...Card_Creator_Name_4Props} {...Card_Creator_Name_4Cb} {...Card_Creator_Name_4IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex630 bpt" {...Flex630Props} {...Flex630Cb} {...Flex630IoProps}>
<Image2 className="p-Showcase Card_Github_4 bpt" {...Card_Github_4Props} {...Card_Github_4Cb} {...Card_Github_4IoProps}/>
<Image2 className="p-Showcase Card_Deploy_4 bpt" {...Card_Deploy_4Props} {...Card_Deploy_4Cb} {...Card_Deploy_4IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Card_5 bpt" {...Card_5Props} {...Card_5Cb} {...Card_5IoProps}>
<Image2 className="p-Showcase Card_Image_5 bpt" {...Card_Image_5Props} {...Card_Image_5Cb} {...Card_Image_5IoProps}/>
<Flex2 className="p-Showcase Flex641 bpt" {...Flex641Props} {...Flex641Cb} {...Flex641IoProps}>
<Flex2 className="p-Showcase Flex635 bpt" {...Flex635Props} {...Flex635Cb} {...Flex635IoProps}>
<TextBox2 className="p-Showcase Card_Title_5 bpt" {...Card_Title_5Props} {...Card_Title_5Cb} {...Card_Title_5IoProps}/>
<TextBox2 className="p-Showcase Card_Text_5 bpt" {...Card_Text_5Props} {...Card_Text_5Cb} {...Card_Text_5IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex669 bpt" {...Flex669Props} {...Flex669Cb} {...Flex669IoProps}>
<Flex2 className="p-Showcase Card_Tag_5_a bpt" {...Card_Tag_5_aProps} {...Card_Tag_5_aCb} {...Card_Tag_5_aIoProps}>
<Button2 className="p-Showcase Card_Tag_5_a_Text bpt" {...Card_Tag_5_a_TextProps} {...Card_Tag_5_a_TextCb} {...Card_Tag_5_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_5_b bpt" {...Card_Tag_5_bProps} {...Card_Tag_5_bCb} {...Card_Tag_5_bIoProps}>
<Button2 className="p-Showcase Card_Tag_5_b_Text bpt" {...Card_Tag_5_b_TextProps} {...Card_Tag_5_b_TextCb} {...Card_Tag_5_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_5_c bpt" {...Card_Tag_5_cProps} {...Card_Tag_5_cCb} {...Card_Tag_5_cIoProps}>
<Button2 className="p-Showcase Card_Tag_5_c_Text bpt" {...Card_Tag_5_c_TextProps} {...Card_Tag_5_c_TextCb} {...Card_Tag_5_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex636 bpt" {...Flex636Props} {...Flex636Cb} {...Flex636IoProps}>
<Flex2 className="p-Showcase Flex628 bpt" {...Flex628Props} {...Flex628Cb} {...Flex628IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_5 bpt" {...Card_Creator_Image_5Props} {...Card_Creator_Image_5Cb} {...Card_Creator_Image_5IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_5 bpt" {...Card_Creator_Name_5Props} {...Card_Creator_Name_5Cb} {...Card_Creator_Name_5IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex627 bpt" {...Flex627Props} {...Flex627Cb} {...Flex627IoProps}>
<Image2 className="p-Showcase Card_Github_5 bpt" {...Card_Github_5Props} {...Card_Github_5Cb} {...Card_Github_5IoProps}/>
<Image2 className="p-Showcase Card_Deploy_5 bpt" {...Card_Deploy_5Props} {...Card_Deploy_5Cb} {...Card_Deploy_5IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Card_6 bpt" {...Card_6Props} {...Card_6Cb} {...Card_6IoProps}>
<Image2 className="p-Showcase Card_Image_6 bpt" {...Card_Image_6Props} {...Card_Image_6Cb} {...Card_Image_6IoProps}/>
<Flex2 className="p-Showcase Flex640 bpt" {...Flex640Props} {...Flex640Cb} {...Flex640IoProps}>
<Flex2 className="p-Showcase Flex633 bpt" {...Flex633Props} {...Flex633Cb} {...Flex633IoProps}>
<TextBox2 className="p-Showcase Card_Title_6 bpt" {...Card_Title_6Props} {...Card_Title_6Cb} {...Card_Title_6IoProps}/>
<TextBox2 className="p-Showcase Card_Text_6 bpt" {...Card_Text_6Props} {...Card_Text_6Cb} {...Card_Text_6IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex673 bpt" {...Flex673Props} {...Flex673Cb} {...Flex673IoProps}>
<Flex2 className="p-Showcase Card_Tag_6_a bpt" {...Card_Tag_6_aProps} {...Card_Tag_6_aCb} {...Card_Tag_6_aIoProps}>
<Button2 className="p-Showcase Card_Tag_6_a_Text bpt" {...Card_Tag_6_a_TextProps} {...Card_Tag_6_a_TextCb} {...Card_Tag_6_a_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_6_b bpt" {...Card_Tag_6_bProps} {...Card_Tag_6_bCb} {...Card_Tag_6_bIoProps}>
<Button2 className="p-Showcase Card_Tag_6_b_Text bpt" {...Card_Tag_6_b_TextProps} {...Card_Tag_6_b_TextCb} {...Card_Tag_6_b_TextIoProps}/>
</Flex2>
<Flex2 className="p-Showcase Card_Tag_6_c bpt" {...Card_Tag_6_cProps} {...Card_Tag_6_cCb} {...Card_Tag_6_cIoProps}>
<Button2 className="p-Showcase Card_Tag_6_c_Text bpt" {...Card_Tag_6_c_TextProps} {...Card_Tag_6_c_TextCb} {...Card_Tag_6_c_TextIoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex632 bpt" {...Flex632Props} {...Flex632Cb} {...Flex632IoProps}>
<Flex2 className="p-Showcase Flex625 bpt" {...Flex625Props} {...Flex625Cb} {...Flex625IoProps}>
<Image2 className="p-Showcase Card_Creator_Image_6 bpt" {...Card_Creator_Image_6Props} {...Card_Creator_Image_6Cb} {...Card_Creator_Image_6IoProps}/>
<TextBox2 className="p-Showcase Card_Creator_Name_6 bpt" {...Card_Creator_Name_6Props} {...Card_Creator_Name_6Cb} {...Card_Creator_Name_6IoProps}/>
</Flex2>
<Flex2 className="p-Showcase Flex626 bpt" {...Flex626Props} {...Flex626Cb} {...Flex626IoProps}>
<Image2 className="p-Showcase Card_Github_6 bpt" {...Card_Github_6Props} {...Card_Github_6Cb} {...Card_Github_6IoProps}/>
<Image2 className="p-Showcase Card_Deploy_6 bpt" {...Card_Deploy_6Props} {...Card_Deploy_6Cb} {...Card_Deploy_6IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex674 bpt" {...Flex674Props} {...Flex674Cb} {...Flex674IoProps}>
<Flex2 className="p-Showcase Flex675 bpt" {...Flex675Props} {...Flex675Cb} {...Flex675IoProps}>
<Image2 className="p-Showcase Image303 bpt" {...Image303Props} {...Image303Cb} {...Image303IoProps}/>
<Flex2 className="p-Showcase Flex706 bpt" {...Flex706Props} {...Flex706Cb} {...Flex706IoProps}>
<TextBox2 className="p-Showcase TextBox453 bpt" {...TextBox453Props} {...TextBox453Cb} {...TextBox453IoProps}/>
</Flex2>
<TextBox2 className="p-Showcase TextBox474 bpt" {...TextBox474Props} {...TextBox474Cb} {...TextBox474IoProps}/>
<Image2 className="p-Showcase Image304 bpt" {...Image304Props} {...Image304Cb} {...Image304IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex705 bpt" {...Flex705Props} {...Flex705Cb} {...Flex705IoProps}>
<Flex2 className="p-Showcase Flex704 bpt" {...Flex704Props} {...Flex704Cb} {...Flex704IoProps}>
<Flex2 className="p-Showcase Flex700 bpt" {...Flex700Props} {...Flex700Cb} {...Flex700IoProps}>
<Flex2 className="p-Showcase Flex693 bpt" {...Flex693Props} {...Flex693Cb} {...Flex693IoProps}>
<Flex2 className="p-Showcase Flex687 bpt" {...Flex687Props} {...Flex687Cb} {...Flex687IoProps}>
<Flex2 className="p-Showcase Flex686 bpt" {...Flex686Props} {...Flex686Cb} {...Flex686IoProps}>
<Flex2 className="p-Showcase Flex685 bpt" {...Flex685Props} {...Flex685Cb} {...Flex685IoProps}>
<Image2 className="p-Showcase Image294 bpt" {...Image294Props} {...Image294Cb} {...Image294IoProps}/>
<TextBox2 className="p-Showcase TextBox455 bpt" {...TextBox455Props} {...TextBox455Cb} {...TextBox455IoProps}/>
</Flex2>
<Image2 className="p-Showcase Image295 bpt" {...Image295Props} {...Image295Cb} {...Image295IoProps}/>
</Flex2>
<TextBox2 className="p-Showcase TextBox456 bpt" {...TextBox456Props} {...TextBox456Cb} {...TextBox456IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex694 bpt" {...Flex694Props} {...Flex694Cb} {...Flex694IoProps}>
<Image2 className="p-Showcase Image299 bpt" {...Image299Props} {...Image299Cb} {...Image299IoProps}/>
<Image2 className="p-Showcase Image298 bpt" {...Image298Props} {...Image298Cb} {...Image298IoProps}/>
<Image2 className="p-Showcase Image297 bpt" {...Image297Props} {...Image297Cb} {...Image297IoProps}/>
<Image2 className="p-Showcase Image296 bpt" {...Image296Props} {...Image296Cb} {...Image296IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex701 bpt" {...Flex701Props} {...Flex701Cb} {...Flex701IoProps}>
<Flex2 className="p-Showcase Flex697 bpt" {...Flex697Props} {...Flex697Cb} {...Flex697IoProps}>
<TextBox2 className="p-Showcase TextBox470 bpt" {...TextBox470Props} {...TextBox470Cb} {...TextBox470IoProps}/>
<Flex2 className="p-Showcase Flex690 bpt" {...Flex690Props} {...Flex690Cb} {...Flex690IoProps}>
<TextBox2 className="p-Showcase TextBox463 bpt" {...TextBox463Props} {...TextBox463Cb} {...TextBox463IoProps}/>
<TextBox2 className="p-Showcase TextBox462 bpt" {...TextBox462Props} {...TextBox462Cb} {...TextBox462IoProps}/>
<TextBox2 className="p-Showcase TextBox461 bpt" {...TextBox461Props} {...TextBox461Cb} {...TextBox461IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex696 bpt" {...Flex696Props} {...Flex696Cb} {...Flex696IoProps}>
<TextBox2 className="p-Showcase TextBox469 bpt" {...TextBox469Props} {...TextBox469Cb} {...TextBox469IoProps}/>
<Flex2 className="p-Showcase Flex689 bpt" {...Flex689Props} {...Flex689Cb} {...Flex689IoProps}>
<TextBox2 className="p-Showcase TextBox458 bpt" {...TextBox458Props} {...TextBox458Cb} {...TextBox458IoProps}/>
<TextBox2 className="p-Showcase TextBox460 bpt" {...TextBox460Props} {...TextBox460Cb} {...TextBox460IoProps}/>
<TextBox2 className="p-Showcase TextBox459 bpt" {...TextBox459Props} {...TextBox459Cb} {...TextBox459IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex698 bpt" {...Flex698Props} {...Flex698Cb} {...Flex698IoProps}>
<TextBox2 className="p-Showcase TextBox471 bpt" {...TextBox471Props} {...TextBox471Cb} {...TextBox471IoProps}/>
<Flex2 className="p-Showcase Flex691 bpt" {...Flex691Props} {...Flex691Cb} {...Flex691IoProps}>
<TextBox2 className="p-Showcase TextBox464 bpt" {...TextBox464Props} {...TextBox464Cb} {...TextBox464IoProps}/>
<TextBox2 className="p-Showcase TextBox465 bpt" {...TextBox465Props} {...TextBox465Cb} {...TextBox465IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex695 bpt" {...Flex695Props} {...Flex695Cb} {...Flex695IoProps}>
<TextBox2 className="p-Showcase TextBox468 bpt" {...TextBox468Props} {...TextBox468Cb} {...TextBox468IoProps}/>
<Flex2 className="p-Showcase Flex688 bpt" {...Flex688Props} {...Flex688Cb} {...Flex688IoProps}>
<TextBox2 className="p-Showcase TextBox457 bpt" {...TextBox457Props} {...TextBox457Cb} {...TextBox457IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex703 bpt" {...Flex703Props} {...Flex703Cb} {...Flex703IoProps}>
<Flex2 className="p-Showcase Flex699 bpt" {...Flex699Props} {...Flex699Cb} {...Flex699IoProps}>
<TextBox2 className="p-Showcase TextBox472 bpt" {...TextBox472Props} {...TextBox472Cb} {...TextBox472IoProps}/>
<Flex2 className="p-Showcase Flex692 bpt" {...Flex692Props} {...Flex692Cb} {...Flex692IoProps}>
<TextBox2 className="p-Showcase TextBox467 bpt" {...TextBox467Props} {...TextBox467Cb} {...TextBox467IoProps}/>
<TextBox2 className="p-Showcase TextBox466 bpt" {...TextBox466Props} {...TextBox466Cb} {...TextBox466IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Showcase Flex702 bpt" {...Flex702Props} {...Flex702Cb} {...Flex702IoProps}>
<Image2 className="p-Showcase Image300 bpt" {...Image300Props} {...Image300Cb} {...Image300IoProps}/>
</Flex2>
</Flex2>
  </>);
}
