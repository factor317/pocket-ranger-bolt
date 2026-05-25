// Template for React Native components
// Use these patterns for all components

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconName } from 'lucide-react-native';
import { router } from 'expo-router';
import { createStyles, theme, combineStyles } from '@/assets/styles';

// TypeScript interfaces
interface ComponentProps {
  title: string;
  onPress?: () => void;
}

interface DataStructure {
  id: string;
  name: string;
  // ... other properties
}

export default function ComponentTemplate({ title, onPress }: ComponentProps) {
  const [data, setData] = useState<DataStructure[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Component initialization
  }, []);

  const handleAction = async () => {
    try {
      setLoading(true);
      // Async operations
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <IconName size={24} color={theme.colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {data.length === 0 ? (
          <View style={styles.emptyState}>
            <IconName size={48} color={theme.colors.primary[500]} />
            <Text style={styles.emptyTitle}>No data yet</Text>
            <Text style={styles.emptySubtitle}>
              Description of empty state
            </Text>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleAction}
            >
              <Text style={styles.actionButtonText}>Action</Text>
            </TouchableOpacity>
          </View>
        ) : (
          data.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              {/* Item content */}
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = createStyles({
  container: theme.components.container,
  header: theme.components.header,
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: theme.components.headerTitle,
  headerSpacer: {
    width: 48,
  },
  scrollView: theme.components.scrollView,
  emptyState: theme.components.emptyState,
  emptyTitle: theme.components.emptyTitle,
  emptySubtitle: theme.components.emptySubtitle,
  actionButton: {
    ...theme.components.buttonPrimary,
    ...theme.layout.buttonPadding,
    borderRadius: theme.spacing.md,
  },
  actionButtonText: {
    ...theme.textStyles.button,
    color: theme.colors.text.primary,
  },
  itemCard: {
    ...theme.components.card,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  itemTitle: {
    ...theme.textStyles.h4,
    color: theme.colors.text.secondary,
  },
});

// Safe text rendering pattern
// Always use this pattern for dynamic text:
{someText ? <Text style={styles.textStyle}>{someText}</Text> : null}

// Error handling pattern
const handleAsyncOperation = async () => {
  try {
    setLoading(true);
    const result = await apiCall();
    
    // Validate result before using
    if (!result || !result.data) {
      throw new Error('Invalid response');
    }
    
    setData(result.data);
  } catch (error) {
    console.error('Operation failed:', error);
    Alert.alert('Error', 'Operation failed. Please try again.');
  } finally {
    setLoading(false);
  }
};