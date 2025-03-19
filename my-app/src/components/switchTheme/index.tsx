'use client';
import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeContext';
import * as S from './styles';

type SwitchProps = {
    onChange: () => void;
    checked: boolean;
    children?: ReactNode;
    className?: string;
    size?: string;
}

const Switch = ({ onChange, checked, children, className, size }: SwitchProps) => {
    return (
        <S.SwitchWrapper className={className} size={size}>
            <label className="bb8-toggle">
                <input
                    className="bb8-toggle__checkbox"
                    type="checkbox"
                    id="theme-toggle"
                    onChange={onChange}
                    checked={checked}
                />
                <div className="bb8-toggle__container">
                    <div className="bb8-toggle__scenery">
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="bb8-toggle__star" />
                        <div className="tatto-1" />
                        <div className="tatto-2" />
                        <div className="gomrassen" />
                        <div className="hermes" />
                        <div className="chenini" />
                        <div className="bb8-toggle__cloud" />
                        <div className="bb8-toggle__cloud" />
                        <div className="bb8-toggle__cloud" />
                    </div>
                    <div className="bb8">
                        <div className="bb8__head-container">
                            <div className="bb8__antenna" />
                            <div className="bb8__antenna" />
                            <div className="bb8__head" />
                        </div>
                        <div className="bb8__body" />
                    </div>
                    <div className="artificial__hidden">
                        <div className="bb8__shadow" />
                    </div>
                </div>
                {children && <div className="switch-label">{children}</div>}
            </label>
        </S.SwitchWrapper>
    );
}

type SwitchThemeProps = {
    size?: string;
};

const SwitchTheme = ({ size }: SwitchThemeProps) => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const isDarkTheme = theme === 'dark';

    return (
        <Switch size={size} className='switch-theme' onChange={toggleTheme} checked={isDarkTheme} />
    );
}

export default SwitchTheme;
