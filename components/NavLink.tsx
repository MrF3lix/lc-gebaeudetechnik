'use client'

export const NavLink = ({ elementId, children }: any) => {

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="px-4 py-6" onClick={() => scrollTo(elementId)}>
            {children}
        </div>
    )
}