import { ReactElement } from "react"


export const AuthButton = ({ content }: { content: string }) => {
    return <button type="submit" className="text-sm w-full border border-emerald-300 py-2.5 rounded bg-emerald-500 font-semibold transition-all hover:bg-emerald-600">{content}</button>
}

export const SocialButton = ({ icon }: { icon: ReactElement }) => {
    return <button className="text-sm w-full flex items-center justify-center gap-2 border bg-stone-800 border-stone-800 py-2.5 rounded font-semibold transition-all hover:bg-stone-700">{icon} Continue with Google</button>
}
