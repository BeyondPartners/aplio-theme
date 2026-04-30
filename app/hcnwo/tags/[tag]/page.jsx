import BlogSearch from '@/components/blogs/BlogSearch'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'

export async function generateMetadata(props) {
  const params = await props.params
  return {
    title: params.tag,
  }
}

export async function generateStaticParams() {
  const blogs = getMarkDownData('content/blogs')
  return blogs.map((item) => ({
    tag: item.data.tags,
  }))
}

const BlogTags = async (props) => {
  const params = await props.params
  const blogs = getMarkDownData('content/blogs')
  const decodedTags = decodeURIComponent(params.tag.replace(/%20/g, ' '))
  const tagsBlog = blogs.filter((blog) => blog.data.tags === decodedTags)
  return (
    <>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG Category" title="Recent blogs created <br/> by aplio" />
        <section className="relative mb-150">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="relative container">
            <div className="absolute top-20 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] rounded-full blur-[145px]"></div>
              <div className="bg-primary-200/25 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
              <div className="bg-primary-200/20 max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px] -ml-[170px] rounded-full blur-[145px] max-md:ml-0"></div>
            </div>
            <BlogSearch blogs={tagsBlog} sidebarBlogs={blogs} setActive={decodedTags} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogTags
