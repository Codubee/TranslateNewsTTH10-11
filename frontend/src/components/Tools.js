import React from 'react' 
import '../styles/Tools.css'
const icons=[
    {
        "name":"React",
        "url": "https://reactstrap.github.io/",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/1UZdv-I_Z5W-jNC09VFkEi8iT8JWPaoxQDkW9VvxE9mdlaGBHdun6fAMtwaz7rEs?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=400"
    },
    {
        "name":"NodeJS",
        "url": "https://nodejs.org/en/",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/11mPxJtu8QvLOZJNVLuBzOQiQSAX42Gtc8ypL5riZGoP7TPrPYio85qiU3uuSWg?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=512"
    },
    {
        "name":"Jira",
        "url": "https://www.atlassian.com/software/jira",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/1XOIEchFcDnFA_a46geYuh_Jr7e__9uDO-OvHn87sYWJUzhbF9SBIU1VrTEHXzQ?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=480"
    },
    {
        "name":"Postman",
        "url": "https://www.postman.com/",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/1rmlox_5CvpMOul4CyQAXjXdTV6ZZZL8WLDwnMd9-PSsYj7fmkYR-n-jLYNn7kw?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=512"
    },
    {
        "name":"AWS",
        "url": "https://aws.amazon.com/",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/1WJOuU9CK9Kch1h1SPzcj0efcOsbKnZ7DrYcFUeKScvoo-FZNVDAbs0m_aSiuDw?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=480"
    },
    {
        "name":"Heroku",
        "url": "http://www.herokuapp.com/",
        "img_src":"https://keep.google.com/u/0/media/v2/1V8dCHxUeczxE6RvTRJML_-WwS2qPw4TVgWrORVtqKHncSpjXHZmoS37dOYaYQ5A/1L-7zcrwO17eCGARkNDxqHCXodpD-3Pf6lqvM-JEeTagHNjVFSgU36g1Aikop88o?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=500"
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
