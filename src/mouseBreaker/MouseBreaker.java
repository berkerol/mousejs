package mouseBreaker;

import java.awt.AWTException;
import java.awt.BorderLayout;
import java.awt.MouseInfo;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SwingUtilities;
import org.jnativehook.GlobalScreen;
import org.jnativehook.NativeHookException;
import org.jnativehook.keyboard.NativeKeyEvent;
import org.jnativehook.keyboard.NativeKeyListener;
import org.jnativehook.mouse.NativeMouseEvent;
import org.jnativehook.mouse.NativeMouseInputListener;

public class MouseBreaker implements NativeKeyListener, NativeMouseInputListener {

    private static final String TITLE = "MouseBreaker";
    private static int horizontal = 10;
    private static int vertical = 10;
    private static Robot robot;

    public static void main(String[] args) throws AWTException {
        try {
            GlobalScreen.registerNativeHook();
        }
        catch (NativeHookException ex) {
            JOptionPane.showMessageDialog(null, ex, TITLE, JOptionPane.ERROR_MESSAGE);
            System.exit(0);
        }
        robot = new Robot();
        MouseBreaker main = new MouseBreaker();
        GlobalScreen.addNativeKeyListener(main);
        GlobalScreen.addNativeMouseListener(main);
        GlobalScreen.addNativeMouseMotionListener(main);
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                JLabel horizontalLabel = new JLabel("Horizontal Movement: ");
                final JTextField horizontalText = new JTextField("" + horizontal, 3);
                JLabel verticalLabel = new JLabel("Vertical Movement: ");
                final JTextField verticalText = new JTextField("" + vertical, 3);
                JButton saveButton = new JButton("Save");
                saveButton.setMnemonic(KeyEvent.VK_S);
                saveButton.addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        horizontal = Integer.parseInt(horizontalText.getText());
                        vertical = Integer.parseInt(verticalText.getText());
                    }
                });
                JPanel horizontalPanel = new JPanel(), verticalPanel = new JPanel();
                horizontalPanel.add(horizontalLabel);
                horizontalPanel.add(horizontalText);
                verticalPanel.add(verticalLabel);
                verticalPanel.add(verticalText);
                JFrame frame = new JFrame(TITLE);
                frame.add(horizontalPanel, BorderLayout.PAGE_START);
                frame.add(verticalPanel, BorderLayout.CENTER);
                frame.add(saveButton, BorderLayout.PAGE_END);
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setVisible(true);
            }
        });
    }

    private int x = MouseInfo.getPointerInfo().getLocation().x;
    private int y = MouseInfo.getPointerInfo().getLocation().y;

    @Override
    public void nativeKeyPressed(NativeKeyEvent e) {
        if (e.getKeyCode() == NativeKeyEvent.VC_LEFT && x > 0) {
            x -= horizontal;
        }
        if (e.getKeyCode() == NativeKeyEvent.VC_RIGHT && x < Toolkit.getDefaultToolkit().getScreenSize().width) {
            x += horizontal;
        }
        if (e.getKeyCode() == NativeKeyEvent.VC_UP && y > 0) {
            y -= vertical;
        }
        if (e.getKeyCode() == NativeKeyEvent.VC_DOWN && y < Toolkit.getDefaultToolkit().getScreenSize().height) {
            y += vertical;
        }
        robot.mouseMove(x, y);
    }

    @Override
    public void nativeKeyTyped(NativeKeyEvent e) {
    }

    @Override
    public void nativeKeyReleased(NativeKeyEvent e) {
    }

    @Override
    public void nativeMouseClicked(NativeMouseEvent e) {
    }

    @Override
    public void nativeMousePressed(NativeMouseEvent e) {
    }

    @Override
    public void nativeMouseReleased(NativeMouseEvent e) {
    }

    @Override
    public void nativeMouseMoved(NativeMouseEvent e) {
        x = e.getX();
        y = e.getY();
    }

    @Override
    public void nativeMouseDragged(NativeMouseEvent e) {
    }

}
