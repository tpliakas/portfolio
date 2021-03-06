/** @jsx jsx */
import { jsx } from "theme-ui"
import lukasBg from "../../../assets/portfolio-images/lukas.jpg"
import heavyliftBg from "../../../assets/portfolio-images/heavylift.jpg"
import radioBg from "../../../assets/portfolio-images/radio.jpg"
import omBg from "../../../assets/portfolio-images/om.jpg"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
    const imageLink = bg === 'lukas' ? lukasBg : bg === 'heavylift' ? heavyliftBg : bg === 'om' ? omBg : radioBg;

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            sx={{
                width: `100%`,
                boxShadow: `lg`,
                position: `relative`,
                textDecoration: `none`,
                borderRadius: `lg`,
                px: 4,
                py: [4, 5],
                color: `white`,
                backgroundImage: `url(${imageLink})` || `none`,
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                    color: `white !important`,
                    transform: `translateY(-5px)`,
                    boxShadow: `xl`,
                },
            }}
        >
            <div sx={{opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`}}>
                {children}
            </div>
            {/*<img src={image} />*/}
            {/*{image}*/}
            <div
                sx={{
                    textTransform: `uppercase`,
                    letterSpacing: `wide`,
                    pt: 4,
                    fontSize: [4, 5],
                    fontWeight: `medium`,
                    lineHeight: 1,
                }}
            >
                {title}
            </div>
        </a>
    )
}

export default ProjectCard
