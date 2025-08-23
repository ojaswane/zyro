'use client'
import React from 'react'
import RotatingText from '@/Animation/RotatingText'

function Animatetext() {
    return (
        <RotatingText
            texts={['Vision', 'Success', 'Impact']}
            mainClassName="px-2 sm:px-2 md:px-3 text-white text-black items-center overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
        />
    )
}

export default Animatetext