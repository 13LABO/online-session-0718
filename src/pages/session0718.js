import React from "react";
import Header from "../Header";
import sessionImage from "../assets/images/sessionImage.png";
import Companies0529 from "../components/Companies0529"
import topImage from "../assets/images/topImage.png"
import "../css/session0718.css";
import Footer from '../components/Footer'
import arrow from '../assets/images/arrow.png'

const Session0614 = (props) => {
  return (
    <>
      <img
        src={topImage}
        className="headImage2"
        alt="headerImage"
        onMouseDownCapture={() => {
          return false;
        }}
        onSelectCapture={() => {
          return false;
        }}
      />
      <p style={{ textAlign: "center" }}>参加はこちらから！</p>
      <p className="form3">
        <a href="https://forms.gle/aakX88iecrNYe4ur7">
          参加申込フォーム
        </a>
      </p>

      <div className="container">
        <Header title="開催にあたって" name="peach-header3" />
        <p className="contents">
          約700名と23社の参加があった道内オンライン合同企業説明会(4/25)を、今度は22卒向け・インターンシップ情報メインで開催します！
          道内学生と道内に拠点を持つ企業のオンラインインターンシップ&セミナーです。
          新型コロナウィルスの影響で対面イベントが中止になっている中で、オンラインで就活を始めてみませんか？
        </p>

        <Header title="開催予定日" name="peach-header3" />
        <p className="contents">7月18日10時～</p>

        <Header title="対象" name="peach-header3" />
        <p className="contents">
          道内企業と道内就職希望の学生（22卒中心、その他の学年も参加可）
        </p>
        <p className="form3">
          <a href="https://forms.gle/aakX88iecrNYe4ur7">
            参加申込フォーム
          </a>
        </p>

        <Header title="オンライン合説のイメージ" name="peach-header3" />
        <img
          src={sessionImage}
          className="contents sessionImage"
          alt="sessionImage"
        />

        <Header title="参加方法・用意するもの" name="peach-header3" />
        <p className="form3">
          <a href="https://forms.gle/aakX88iecrNYe4ur7">
            参加申込フォーム
          </a>
        </p>
        <p className="contents">
          ・上のボタンより、参加申込みをお願いいたします。
          <br />
          ・当日使用するスマホ・PCに、「zoom」アプリをインストールしておいてください。
          <br />
          （iPhoneは
          <a href="https://apps.apple.com/us/app/id546505307">コチラ</a>{" "}
          、Androidは
          <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings">
            コチラ
          </a>{" "}
          、PCは<a href="https://zoom.us/download#client_4meeting">コチラ</a>
          インストール所要時間5分程度）
          <br />
          ・当日使用するzoomのURL（登録メールアドレスに前日までにお送りいたします）
          <br />
          ・【任意】企業の事前配布資料を読んできてください(一部の企業のみ)。事前配布資料は以下のボタンでGoogleドライブからダウンロードすることができます。
        </p>
        <p className="pre0529 contents">
          <a href="https://bit.ly/2ZcECgY">事前配布資料</a>
        </p>

        <Header title="当日のスケジュール" name="peach-header3" />
        <p className="contents">
          ・各タームの10分前に指定のURLをクリックしてください。
          <br />
          ・当日は各ルームに司会がおりますので司会の指示に従ってください。
          <br />
        </p>
        <table className="tg contents">
          <tbody>
            <tr>
              <th></th>
              <th className="centerTitle0614-1">全体の流れ</th>
              <th className="centerTitle0614-2">ルーム1</th>
              <th className="centerTitle0614-2">ルーム2</th>
              <th className="centerTitle0614-2">ルーム3</th>
            </tr>
            <tr>
              <td className="center time">9:30~10:00</td>
              <td className="center compSession0614-1">準備</td>
              <td className="center compSession0614-2" colSpan="3">
                OPEN・準備(各ルーム・待機室)
              </td>
            </tr>

            <tr>
              <td className="center time">10:00〜10:30</td>
              <td className="center compSession0614-1">全体説明</td>
              <td className="center compSession0614-2" colSpan="3">
                就活セミナー(メインルーム)
              </td>
            </tr>
            <tr>
              <td className="center time">10:30〜11:00</td>
              <td className="center compSession0614-1">第1ターン</td>
              <td className="center compSession0614-2">
                キットアライブ(IT/システム開発)
              </td>
              <td className="center compSession0614-2">道東あさひ農業協同組合(農協)</td>
              <td className="center compSession0614-2">
                一寸房(建築設計)
              </td>
              
            </tr>
            <tr>
              <td className="center break">15分休憩</td>
              <td className="center arrow" colSpan="4">
                <img src={arrow} alt="arrow"></img>
              </td>
            </tr>
            <tr>
              <td className="center time">11:15〜11:45</td>
              <td className="center compSession0614-1">第2ターン</td>
              <td className="center compSession0614-2">
                キットアライブ(IT/システム開発)
              </td>
              <td className="center compSession0614-2">井上技研(建築業)</td>
              <td className="center compSession0614-2">
                一寸房(建築設計)
              </td>
            </tr>
            <tr>
              <td className="center break">15分休憩</td>
              <td className="center arrow" colSpan="4">
                <img src={arrow} alt="arrow"></img>
              </td>
            </tr>
            <tr>
              <td className="center time">12:00〜12:30</td>
              <td className="center compSession0614-1">第3ターン</td>
              <td className="center compSession0614-2">
                北海道新聞社(マスコミ(新聞))
              </td>
              <td className="center compSession0614-2">井上技研(建築業)</td>
              <td className="center compSession0614-2">
                道東あさひ農業協同組合(農協)
              </td>
            </tr>

            <tr>
              <td className="center break">お昼休憩</td>

              <td className="center arrow" colSpan="4">
                <img src={arrow} alt="arrow"></img>
              </td>
            </tr>
            
            <tr>
              <td className="center time">13:20〜13:50</td>             
              <td className="center compSession0614-1">第4ターン</td>
              <td className="center compSession0614-2">
                北海道新聞社(マスコミ(新聞))
              </td>
              <td className="center compSession0614-2">
                三ッ輪商会(卸売業・小売業)
              </td>
              <td className="center compSession0614-2">イオン北海道(総合小売業)</td>
            </tr>   
            
            <tr>
              <td className="center break">15分休憩</td>

              <td className="center arrow" colSpan="4">
                <img src={arrow} alt="arrow"></img>
              </td>
            </tr>
            
            <tr>
              <td className="center time">14:05〜14:35</td>
              <td className="center compSession0614-1">第5ターン</td>
              <td className="center compSession0614-2">
                -
              </td>
              <td className="center compSession0614-2">三ッ輪商会(卸売業・小売業)</td>
              <td className="center compSession0614-2">
                イオン北海道(総合小売業)
              </td>
            </tr>
            

          </tbody>
        </table> 
        

        <Header title="出展予定企業(随時追加)" name="peach-header3" />
        <Companies0529 data={props.data} /> 

        {/* <Header title="過去取材実績" name="peach-header3" />
        <ul className="contents">
          <li>
            <a href="・https://www.hokkaido-np.co.jp/article/411292">
              北海道新聞
            </a>
          </li>
          <li>
            <a href="https://www.nikkei.com/article/DGXMZO58470250U0A420C2L41000/">
              日経新聞
            </a>
          </li>
          <li>朝日新聞(5/18掲載予定)</li>
          <li>NHK:おはよう北海道(5/7)</li>
          <li>
            <a href="https://this.kiji.is/633488200549614689?c=462419638605612129">
              Tvh:けいナビ
            </a>
          </li>
        </ul> */}

        <Header title="その他お問い合わせ" name="peach-header3" />
        <p className="contents">
          13LABOホームページよりお問い合わせください。
          <a href="https://13labo.com">お問い合わせフォーム</a>
        </p>
        
      </div>
      <Footer />
    </>
  );
};

export default Session0614;
