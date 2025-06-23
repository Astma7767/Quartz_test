import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function Banner({ fileData }: QuartzComponentProps) {
    const banner = fileData.frontmatter?.banner
    if (!banner || banner === "None") {
      return null
    }
    return (
      <div className="banner-img-wrapper">
        <img src={banner as string} className="banner-img" />
      </div>
    )
  }
  return Banner
}) satisfies QuartzComponentConstructor