import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, ActivityIndicator, Pressable } from 'react-native'

import colors from '../theme/colors'

const VARIANTS = {
    ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        iconColor: colors.text,
    },
    surface: {
        backgroundColor: colors.surfaceElevated,
        borderColor: colors.border,
        iconColor: colors.text,
    },
    primary: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        iconColor: colors.background,
    }
}

export default function IconButton({
    acessebilityLabel,
    active = false,
    disable = false,
    icon,
    iconSize = 24,
    loading = false,
    onPress,
    size = 48,
    variant = 'ghost',
}) {
    const selectedVariant = VARIANTS[variant] ?? VARIANTS.ghost;
    const iconColor = active ? colors.primary : selectedVariant.iconColor;

    return (
        <Pressable
            acessebilityLabel={acessebilityLabel}
            accessibilityRole='button'
            accessibilityState={{ disabled, selected: active }}
            disabled={disable || loading}
            hitSlop={10}
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: selectedVariant.backgroundColor,
                    borderColor: active ? colors.primary : selectedVariant.borderColor,
                    opacity: disable ? 0.42 : pressed ? 0.72 : 1,
                    transform: [{ scale: pressed ? 0.96 : 1 }],
                }
            ]}
        >
            {loading ? (
                <ActivityIndicator color={iconColor} />
            ) : (
                <Ionicons name={icon} size={iconSize} color={iconColor} />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({})