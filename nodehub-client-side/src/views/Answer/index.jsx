import React, { Component } from 'react'
import "./answer.scss"
import { WingBlank } from "antd-mobile"
export default class index extends Component {
    render() {
        return (
            <WingBlank size="md">
                <div className="answer-header">
                    <div className="header-left">
                        <span className="iconfont icon-fanhui-copy-copy"></span>
                    </div>
                    <div className="header-right">
                        <span className="iconfont icon-sousuo"></span>
                        <span className="iconfont icon-shenglvehao"></span>
                    </div>
                </div>
                <div className="answer-title">
                    <h1 className="question-title">为什么千锋是前端教育的领头羊？</h1>
                    <p>知乎 ·  252个回答 ></p>
                    <ul>
                        <li>
                            <img src={require("assets/images/addUser.png")} alt="" />
                            <span>邀请回答</span>
                        </li>
                        <li>
                            <img src={require("assets/images/note.png")} alt="" />
                            <span>写回答</span>
                        </li>
                    </ul>
                </div>
                <div className="answer-content">
                    <div className="answer-user">
                        <div className="answer-img">
                            <img src={require("assets/images/qianfeng.jpg")} alt="" />
                            <div className="answer-user-info">
                                <span>千锋教育</span>
                                <span>用心做教育</span>
                            </div>
                        </div>
                        <div className="answer-user-follow">
                            <span className="iconfont icon-tianjia"></span>
                            <span>关注</span>
                        </div>
                    </div>
                    <div className="answer-text">
                        摘要: Token 是在服务端产生的。如果前端使用用户名/密码向服务端请求认证，服务端认证成功，那么在服务端会返回 Token 给前端。前端可以在每次请求的时候带上 Token 证明自己的合法地位

                        

                        不久前，我在在前后端分离实践中提到了基于 Token 的认证，现在我们稍稍深入一些。

                        

                        通常情况下，我们在讨论某个技术的时候，都是从问题开始。那么第一个问题：

                        
                        为什么要用 Token？

                        

                        而要回答这个问题很简单——因为它能解决问题！

                        

                        可以解决哪些问题呢？

                        

                        Token 完全由应用管理，所以它可以避开同源策略

                        Token 可以避免 CSRF 攻击(http://dwz.cn/7joLzx)

                        Token 可以是无状态的，可以在多个服务间共享

                        

                        Token 是在服务端产生的。如果前端使用用户名/密码向服务端请求认证，服务端认证成功，那么在服务端会返回 Token 给前端。前端可以在每次请求的时候带上 Token 证明自己的合法地位。如果这个 Token 在服务端持久化（比如存入数据库），那它就是一个永久的身份令牌。

                        

                        于是，又一个问题产生了：需要为 Token 设置有效期吗？

                        
                        需要设置有效期吗？

                        

                        对于这个问题，我们不妨先看两个例子。一个例子是登录密码，一般要求定期改变密码，以防止泄漏，所以密码是有有效期的；另一个例子是安全证书。SSL 安全证书都有有效期，目的是为了解决吊销的问题，对于这个问题的详细情况，来看看知乎的回答(http://dwz.cn/7joMhq)。所以无论是从安全的角度考虑，还是从吊销的角度考虑，Token 都需要设有效期。

                        

                        那么有效期多长合适呢？

                        

                        只能说，根据系统的安全需要，尽可能的短，但也不能短得离谱——想像一下手机的自动熄屏时间，如果设置为 10 秒钟无操作自动熄屏，再次点亮需要输入密码，会不会疯？如果你觉得不会，那就亲自试一试，设置成可以设置的最短时间，坚持一周就好（不排除有人适应这个时间，毕竟手机厂商也是有用户体验研究的）。

                        

                        然后新问题产生了，如果用户在正常操作的过程中，Token 过期失效了，要求用户重新登录……用户体验岂不是很糟糕？

                        

                        为了解决在操作过程不能让用户感到 Token 失效这个问题，有一种方案是在服务器端保存 Token 状态，用户每次操作都会自动刷新（推迟） Token 的过期时间——Session 就是采用这种策略来保持用户登录状态的。然而仍然存在这样一个问题，在前后端分离、单页 App 这些情况下，每秒种可能发起很多次请求，每次都去刷新过期时间会产生非常大的代价。如果 Token 的过期时间被持久化到数据库或文件，代价就更大了。所以通常为了提升效率，减少消耗，会把 Token 的过期时保存在缓存或者内存中。
                    </div>
                </div>

            </WingBlank>
        )
    }
}
