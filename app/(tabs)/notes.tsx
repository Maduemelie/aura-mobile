import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export default function NotesScreen() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Meeting Notes',
      content: 'Discussed Q1 goals with the team',
      createdAt: new Date('2025-12-24'),
    },
    {
      id: '2',
      title: 'Ideas',
      content: 'New feature implementation ideas',
      createdAt: new Date('2025-12-23'),
    },
  ]);

  const renderNoteItem = ({ item }: { item: Note }) => (
    <Pressable style={styles.noteCard}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent} numberOfLines={2}>
        {item.content}
      </Text>
      <Text style={styles.noteDate}>
        {item.createdAt.toLocaleDateString()}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
        <Pressable style={styles.addButton}>
          <MaterialIcons name="add" size={24} color="#ffffff" />
        </Pressable>
      </View>

      {notes.length > 0 ? (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={renderNoteItem}
          contentContainerStyle={styles.list}
          numColumns={2}
        />
      ) : (
        <View style={styles.emptyState}>
          <MaterialIcons name="note-alt" size={48} color="#d1d5db" />
          <Text style={styles.emptyText}>No notes yet</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  addButton: {
    backgroundColor: '#8b5cf6',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 12,
    gap: 12,
  },
  noteCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    margin: 6,
    borderColor: '#e5e7eb',
    borderWidth: 1,
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 6,
  },
  noteContent: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  noteDate: {
    fontSize: 10,
    color: '#9ca3af',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#9ca3af',
  },
});
