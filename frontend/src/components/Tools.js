import React from 'react' 
import '../styles/Tools.css'
const icons=[
    {
        "name":"React",
        "url": "https://reactstrap.github.io/",
        "img_src":"https://lh3.googleusercontent.com/hJqxG2pKiYBBddonYaPUgdqkQXnfCY9mBL81F3G2jRr-frg3XhiKSGin-G87IjHL0WLt=s85"
    },
    {
        "name":"NodeJS",
        "url": "https://nodejs.org/en/",
        "img_src":"https://lh3.googleusercontent.com/BV1ENBbmOan310M6dQtL7DMDuSXBda9-FLvdwptpaEYhyLhx6K2yjlfcRiJWte8pzcNDaA=s85"
    },
    {
        "name":"Jira",
        "url": "https://www.atlassian.com/software/jira",
        "img_src":"https://lh3.googleusercontent.com/NR9nTO0u_GNmb6WJSqBc4X4yyAeo_ZACUqqMgHVle2HJiKgOSRDYFdx1vj6-OfezZbaidQ=s85"
    },
    {
        "name":"Postman",
        "url": "https://www.postman.com/",
        "img_src":"https://lh3.googleusercontent.com/7bRu1BQhQIbXvu6zWLlHULWSPjfckCpS71Eutoh96vo6VrV-KxxJHUJJrXIs2HFTZe83RJw=s85"
    },
    {
        "name":"AWS",
        "url": "https://aws.amazon.com/",
        "img_src":"https://lh3.googleusercontent.com/lkulTOeR4fYWnHQ4MpGfQTBOyWrTczRRJDZ65dqyGB4yA3DOUFrG8GqqdeJtw1d5VoOh=s85"
    },
    {
        "name":"Heroku",
        "url": "http://www.herokuapp.com/",
        "img_src":"https://lh3.googleusercontent.com/lRqlkyK49Q7gsckiUQDpFvtnuWOX7IU_24qAkAiTf8prVj94Z-0w2icppVkR8y9i4Kuz=s85"
    }
]
function Tools() { 
    return (
        <div className="tools-div">
            <h6 id="tools-h6-text">Tools include: React, NodeJs, Jira, Postman, AWS, Heroku</h6>
            {icons.map((objIcon) => (
                <>
                {                   
                    <a href={objIcon.url}>
                        <img id='icons'alt={objIcon.name} src={objIcon.img_src}>
                        </img>
                    </a>
                }
                </>
            ))
            }
        </div>
    )
}


export default Tools