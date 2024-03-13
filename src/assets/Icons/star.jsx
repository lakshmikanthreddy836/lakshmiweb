
import React from "react";

const StarIcon = ({ className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" className={`${className} h-[20px]`}>
            <path fill-rule="evenodd" d="M10 2.5l1.55 3.907 4.45.407c.38.035.53.517.23.779l-3.423 2.97.966 4.603c.08.378-.317.678-.65.46L10 13.75l-4.122 2.457c-.333.198-.73-.082-.65-.46l.967-4.603-3.422-2.97c-.303-.262-.15-.744.23-.778l4.45-.407L10 2.5z" clip-rule="evenodd" />
        </svg>

    );
};

export default StarIcon;
