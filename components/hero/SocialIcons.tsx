import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaYoutube,
    FaEnvelope
} from "react-icons/fa";

export default function SocialIcons() {

    return (

        <div className="mt-8 flex gap-5 text-3xl">

            <a
                href="https://github.com/"
                target="_blank"
            >
                <FaGithub className="hover:text-cyan-400 duration-300" />
            </a>

            <a
                href="https://linkedin.com/"
                target="_blank"
            >
                <FaLinkedin className="hover:text-cyan-400 duration-300" />
            </a>

            <a
                href="https://facebook.com/"
                target="_blank"
            >
                <FaFacebook className="hover:text-cyan-400 duration-300" />
            </a>

            <a
                href="https://youtube.com/"
                target="_blank"
            >
                <FaYoutube className="hover:text-cyan-400 duration-300" />
            </a>

            <a href="mailto:sunilacharya338@gmail.com">
                <FaEnvelope className="hover:text-cyan-400 duration-300" />
            </a>

        </div>

    );

}